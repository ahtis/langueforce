declare module '*';

declare var ENV: string;
declare var System: SystemJS;

interface SystemJS {
  import: (path?: string) => Promise<any>;
}

interface GlobalEnvironment {
  ENV: string;
  SystemJS: SystemJS;
  System: SystemJS;
}

interface WebpackRequire {
  (id: string): any;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure(ids: string[], callback: (req: WebpackRequire) => void, chunkName?: string): void;
  context(directory: string, useSubDirectories?: boolean, regExp?: RegExp): WebpackContext;
}

interface WebpackContext extends WebpackRequire {
    keys(): string[];
}

interface ErrorStackTraceLimit {
  stackTraceLimit: number;
}

interface NodeRequire extends WebpackRequire {}
interface ErrorConstructor extends ErrorStackTraceLimit {}
interface Global extends GlobalEnvironment {}
