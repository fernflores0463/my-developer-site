// Pieces of work shown on /work, and (when featured) in the homepage's
// Selected work section. Newest first.

export interface WorkLink {
	href: string;
	label: string;
	ariaLabel?: string;
	newTab?: boolean;
	/** Secondary links render in the quiet muted style. */
	quiet?: boolean;
}

export interface WorkItem {
	year: string;
	/** Short kind shown in the homepage row, e.g. "Paper". */
	kind: string;
	/** Group label on /work, e.g. "Writing". */
	group: string;
	/** Metadata line on /work. */
	meta: string[];
	title: string;
	/** Shorter title for the homepage row. */
	shortTitle: string;
	/** One line under the homepage row. */
	note: string;
	/** Trusted HTML (allows <sup>); authored here, never user input. */
	summary: string;
	/** Trusted HTML (allows an inline <a>); authored here, never user input. */
	credit: string;
	links: WorkLink[];
	figure?: 'lattice';
	featured?: boolean;
}

export const work: WorkItem[] = [
	{
		year: '2020',
		kind: 'Paper',
		group: 'Writing',
		meta: ['Paper', '12 pages', 'Lattices', 'Post-quantum cryptography'],
		title: 'An Analysis of the Ajtai–Kumar–Sivakumar (AKS) Sieving Algorithm',
		shortTitle: 'An Analysis of the AKS Sieving Algorithm',
		note: 'Lattice problems behind post-quantum cryptography, written for Prof. Stanisław Radziszowski',
		summary:
			"A walkthrough of the first algorithm to solve the exact Shortest Vector Problem in 2<sup>O(n)</sup> time, and the lattice problems it builds on: SVP, CVP, LLL and Babai's approximation. Not original research. I wrote it to understand what cryptography leans on once Shor's algorithm breaks RSA.",
		credit:
			'Written and presented in Advanced Cryptography (CSCI 762) at RIT, Spring 2020 · taught by <a href="https://en.wikipedia.org/wiki/Stanis%C5%82aw_Radziszowski">Prof. Stanisław Radziszowski</a>',
		links: [
			{
				href: '/work/aks-sieving.pdf',
				label: 'Read the paper (PDF)',
				ariaLabel: 'Read the paper (PDF, opens in a new tab)',
				newTab: true,
			},
			{
				href: 'https://www.cs.rit.edu/~spr/COURSES/CRYPTO/termpap20.html',
				label: 'Presentation schedule ↗',
				quiet: true,
			},
		],
		figure: 'lattice',
		featured: true,
	},
];
