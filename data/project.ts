
import { Project } from '../types';

export const projectsData: Project[] = [
  { 
    id: 't1', 
    title: 'Protennisdotfun', 
    description: 'The first on-chain tennis fantasy experience, where skill meets real markets.', 
    tasks: [
      'Register before Jan 7th to get access',
      'Buy Raffle Tickets',
      'Winners get Crates at launch',
      'Losing tickets can be claimed back immediately'
    ],
    type: 'testnets', 
    link: 'https://card.protennis.fun', 
    status: 'Ends Jan 7' 
  },
  { 
    id: 't2', 
    title: 'DeepNodeAI', 
    description: 'The foundation for open & honest AI.', 
    tasks: [
      'Connect wallet and sign',
      'Connect X and Discord',
      'Claim all badges',
      'Verify in Discord roles channel'
    ],
    type: 'testnets', 
    link: 'https://mindoshare.ai', 
    status: 'Badges Live' 
  },
  { 
    id: 't3', 
    title: 'Polarise', 
    description: 'AI-powered SocialFi. Turning social attention into frictionless onchain assets.', 
    tasks: [
      'Connect wallet',
      'Complete address activation',
      'Finish all quests',
      'Daily interactions for rewards'
    ],
    type: 'testnets', 
    link: 'https://app.polarise.org/', 
    status: 'Quest Active' 
  },
  { 
    id: 'n1', 
    title: 'MoMo', 
    description: 'The First NFT collection and cultural layer on Tempo.', 
    tasks: ['Monitor X for mint dates', 'Engage for whitelist'],
    type: 'nfts', 
    link: 'https://x.com/momoyumemi', 
    status: 'Live' 
  },
  { 
    id: 'n2', 
    title: 'Really Nice', 
    description: 'One piece of digital art. Every day.', 
    tasks: ['Daily drops on X', 'Auction details via Twitter'],
    type: 'nfts', 
    link: 'https://x.com/ReallyNice_Art', 
    status: 'Live' 
  }
];
