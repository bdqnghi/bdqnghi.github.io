import { useState } from "react";
// Layout moved to App-level; this page renders content only.
import { publications, Publication } from "@/data/publications";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const Publications = () => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedConference, setSelectedConference] = useState<string>('all');
  const [expandedAbstracts, setExpandedAbstracts] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState<string>('');

  const years = Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a);
  const types = Array.from(new Set(publications.map(p => p.type)));

  const getConferenceAbbreviation = (venue: string, type: string) => {
    if (type === 'preprint') return 'arXiv';
    if (type === 'journal') return 'Journal';
    
    // Extract conference abbreviations from venue names
    if (venue.includes('ICLR')) return 'ICLR';
    if (venue.includes('NAACL')) return 'NAACL';
    if (venue.includes('FORGE')) return 'FORGE';
    if (venue.includes('EACL')) return 'EACL'; // Check EACL before ACL
    if (venue.includes('ACL')) return 'ACL'; // Catch all other ACL variations
    if (venue.includes('EMNLP')) return 'EMNLP';
    if (venue.includes('SIGIR')) return 'SIGIR';
    if (venue.includes('ICSE') || venue.includes('International Conference on Software Engineering')) return 'ICSE';
    if (venue.includes('AAAI')) return 'AAAI';
    if (venue.includes('ESEC/FSE') || venue.includes('FSE')) return 'FSE';
    if (venue.includes('SANER')) return 'SANER';
    if (venue.includes('ASE')) return 'ASE';
    if (venue.includes('Workshop') || venue.includes('workshop')) return 'Workshop';
    
    return 'Conf';
  };

  const filteredPublications = publications.filter(pub => {
    const yearMatch = selectedYear === 'all' || pub.year.toString() === selectedYear;
    const typeMatch = selectedType === 'all' || pub.type === selectedType;
    const conferenceMatch = selectedConference === 'all' || getConferenceAbbreviation(pub.venue, pub.type) === selectedConference;
    const searchMatch = searchQuery === '' || 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase())) ||
      pub.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (pub.abstract && pub.abstract.toLowerCase().includes(searchQuery.toLowerCase()));
    return yearMatch && typeMatch && conferenceMatch && searchMatch;
  }).sort((a, b) => {
    // Sort by year (newest first), then by title for same year
    if (a.year !== b.year) {
      return b.year - a.year;
    }
    return a.title.localeCompare(b.title);
  });

  // Calculate conference counts
  const conferenceCounts = publications.reduce((counts, pub) => {
    const conference = getConferenceAbbreviation(pub.venue, pub.type);
    counts[conference] = (counts[conference] || 0) + 1;
    return counts;
  }, {} as Record<string, number>);

  // Organize conferences by tier
  const topTierConferences = ['ICLR', 'ACL', 'EMNLP', 'ICSE', 'FSE', 'AAAI', 'SIGIR', 'NAACL', 'ASE'];
  
  const conferenceEntries = Object.entries(conferenceCounts);
  
  // Separate top-tier and other conferences
  const topTierEntries = conferenceEntries
    .filter(([conference]) => topTierConferences.includes(conference))
    .sort(([, a], [, b]) => b - a);
  
  const otherEntries = conferenceEntries
    .filter(([conference]) => !topTierConferences.includes(conference))
    .sort(([, a], [, b]) => b - a);

  const toggleAbstract = (id: string) => {
    const newExpanded = new Set(expandedAbstracts);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedAbstracts(newExpanded);
  };

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="flex items-end justify-between mb-lg">
          <h1 className="text-4xl font-bold">Publications</h1>
          <div className="text-sm text-muted-foreground font-mono">
            <span className="opacity-60">Total:</span> <span className="font-semibold text-foreground">{filteredPublications.length}</span> 
            <span className="opacity-60 ml-2">of</span> <span className="font-semibold text-foreground">{publications.length}</span>
          </div>
        </div>
        
        {/* Search and Filters */}
        <div className="flex flex-wrap items-center gap-md mb-xl">
          <div className="flex items-center space-x-xs">
            <label htmlFor="search" className="text-sm font-medium">Search:</label>
            <input
              id="search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search papers..."
              className="w-64 text-sm border border-border bg-background px-xs py-1 placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center space-x-xs">
            <label htmlFor="year-filter" className="text-sm font-medium">Year:</label>
            <select
              id="year-filter"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="text-sm border border-border bg-background px-xs py-1"
            >
              <option value="all">All</option>
              {years.map(year => (
                <option key={year} value={year.toString()}>{year}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-xs">
            <label htmlFor="type-filter" className="text-sm font-medium">Type:</label>
            <select
              id="type-filter"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="text-sm border border-border bg-background px-xs py-1"
            >
              <option value="all">All</option>
              {types.map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Conference Statistics */}
        <div className="mb-xl">
          <div className="flex items-center gap-md mb-md">
            <h2 className="text-lg font-semibold">Publications by Conference</h2>
            {selectedConference !== 'all' && (
              <button
                onClick={() => setSelectedConference('all')}
                className="text-xs text-muted-foreground hover:text-foreground underline"
              >
                Clear filter
              </button>
            )}
          </div>
          
          {/* First Line - Top Conferences */}
          {topTierEntries.length > 0 && (
            <div className="mb-sm">
              <div className="flex flex-wrap gap-xs">
                {topTierEntries.map(([conference, count]) => (
                  <button 
                    key={conference}
                    onClick={() => setSelectedConference(conference === selectedConference ? 'all' : conference)}
                    className={`btn-terminal inline-flex items-center gap-xs px-md py-xs text-xs font-medium ${
                      selectedConference === conference 
                        ? 'border-primary text-primary' 
                        : ''
                    }`}
                  >
                    {conference}: {count}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Second Line - Other Conferences */}
          {otherEntries.length > 0 && (
            <div>
              <div className="flex flex-wrap gap-xs">
                {otherEntries.map(([conference, count]) => (
                  <button 
                    key={conference}
                    onClick={() => setSelectedConference(conference === selectedConference ? 'all' : conference)}
                    className={`btn-terminal inline-flex items-center gap-xs px-md py-xs text-xs font-medium ${
                      selectedConference === conference 
                        ? 'border-primary text-primary' 
                        : ''
                    }`}
                  >
                    {conference}: {count}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Publications List */}
        <div className="space-y-xl">
          {filteredPublications.map((publication) => (
            <article key={publication.id} className="border-b border-border pb-lg last:border-b-0">
              <div className="flex items-start gap-lg">
                {/* Conference Badge */}
                <div className="flex-shrink-0 mt-xs">
                  <span className="inline-block py-xs text-sm font-bold bg-primary text-primary-foreground border border-border w-[100px] text-center">
                    [{getConferenceAbbreviation(publication.venue, publication.type)}]
                  </span>
                </div>
                
                {/* Publication Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-xs">{publication.title}</h3>
              
                  <p className="text-sm text-muted-foreground mb-xs">
                    {publication.authors.join(', ')}
                  </p>
                  
                  <p className="text-sm italic text-muted-foreground mb-md">
                    {publication.venue}, {publication.year}
                  </p>
              
                  <div className="flex flex-wrap items-center gap-md mb-md">
                    <button
                      onClick={() => toggleAbstract(publication.id)}
                      className="btn-terminal px-3 py-1 text-xs font-medium"
                    >
                      {expandedAbstracts.has(publication.id) ? 'Hide Abstract' : 'Show Abstract'}
                    </button>
                    
                    {publication.doi && (
                      <a
                        href={`https://doi.org/${publication.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-terminal px-3 py-1 text-xs font-medium inline-block"
                      >
                        DOI
                      </a>
                    )}
                    
                    {publication.pdfUrl && (
                      <a
                        href={publication.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-terminal px-3 py-1 text-xs font-medium inline-block"
                      >
                        PDF
                      </a>
                    )}
                    
                    {publication.codeUrl && (
                      <a
                        href={publication.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-terminal px-3 py-1 text-xs font-medium inline-block"
                      >
                        Code
                      </a>
                    )}

                    {publication.ranking && (
                      <span className="bg-accent text-accent-foreground px-xs py-1 text-xs font-medium border border-border">
                        {publication.ranking}
                      </span>
                    )}
                  </div>

                  {/* Acceptance Rate */}
                  {publication.acceptanceRate && (
                    <div className="mb-md">
                      <span className="text-xs text-muted-foreground">
                        Acceptance Rate: {publication.acceptanceRate}
                      </span>
                    </div>
                  )}
                  
                  {expandedAbstracts.has(publication.id) && (
                    <div className="text-sm text-muted-foreground bg-muted p-md border-l-2 border-border">
                      {publication.abstract}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <p className="text-muted-foreground text-center py-xl">
            No publications found matching the selected filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default Publications;