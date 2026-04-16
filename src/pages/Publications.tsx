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
        <div className="flex items-end justify-between mb-4">
          <h1 className="text-2xl font-bold">Publications</h1>
          <div className="text-xs text-muted-foreground font-mono">
            <span className="opacity-60">Total:</span> <span className="font-semibold text-foreground">{filteredPublications.length}</span>
            <span className="opacity-60 ml-1">of</span> <span className="font-semibold text-foreground">{publications.length}</span>
          </div>
        </div>
        
        {/* Search and Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="flex items-center space-x-xs">
            <label htmlFor="search" className="text-sm font-medium">Search:</label>
            <input
              id="search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search papers..."
              className="w-64 text-sm border border-border bg-background px-3 py-1.5 rounded-md placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring/40"
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
              className="text-sm border border-border bg-background px-3 py-1.5 rounded-md"
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
              className="text-sm border border-border bg-background px-3 py-1.5 rounded-md"
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
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
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
        <div className="divide-y divide-border">
          {filteredPublications.map((publication) => (
            <article key={publication.id} className="py-3 first:pt-0">
              <div className="flex items-start gap-3">
                {/* Conference Badge */}
                <span className="inline-block mt-0.5 py-0.5 text-[11px] font-semibold bg-secondary text-secondary-foreground border border-border rounded-sm w-[72px] text-center flex-shrink-0">
                  {getConferenceAbbreviation(publication.venue, publication.type)}
                </span>

                {/* Publication Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold leading-snug">{publication.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    {publication.authors.join(', ')}
                  </p>
                  <p className="text-xs italic text-muted-foreground mt-0.5">
                    {publication.venue}, {publication.year}
                    {publication.acceptanceRate && <span className="not-italic"> &middot; Acceptance: {publication.acceptanceRate}</span>}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                    <button
                      onClick={() => toggleAbstract(publication.id)}
                      className="btn-terminal px-2 py-0.5 text-[11px]"
                    >
                      {expandedAbstracts.has(publication.id) ? 'Hide' : 'Abstract'}
                    </button>

                    {publication.doi && (
                      <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noopener noreferrer" className="btn-terminal px-2 py-0.5 text-[11px] inline-block">DOI</a>
                    )}
                    {publication.pdfUrl && (
                      <a href={publication.pdfUrl} target="_blank" rel="noopener noreferrer" className="btn-terminal px-2 py-0.5 text-[11px] inline-block">PDF</a>
                    )}
                    {publication.codeUrl && (
                      <a href={publication.codeUrl} target="_blank" rel="noopener noreferrer" className="btn-terminal px-2 py-0.5 text-[11px] inline-block">Code</a>
                    )}
                    {publication.ranking && (
                      <span className="bg-accent/10 text-accent px-1.5 py-0.5 text-[11px] font-medium rounded-sm">{publication.ranking}</span>
                    )}
                  </div>

                  {expandedAbstracts.has(publication.id) && (
                    <div className="text-xs text-muted-foreground bg-muted/50 p-3 mt-2 border-l-2 border-accent/20 rounded-r-sm leading-relaxed">
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