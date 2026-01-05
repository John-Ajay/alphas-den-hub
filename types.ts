
export interface CollabManager {
  id: string;
  name: string;
  description: string;
  criteria: string;
  xLink: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tasks?: string[];
  type: 'testnets' | 'nfts';
  link: string;
  status?: string;
}

export type ActiveTab = 'dashboard' | 'testnets' | 'collab-network' | 'nfts';
