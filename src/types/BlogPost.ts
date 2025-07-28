export default interface BlogPost {
  id: number;
  author: string;
  tagline: string;
  content: string;
  createdAt: Date;  
  updatedAt: Date;
}