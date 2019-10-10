/** Directory: describe how a directory is described in the CDN (content directory network) */
export interface Directory {
  path: string;
  dirname: string;
  basename?: string;
  filename?: string;
  type?: string;
  url?: string;
}
