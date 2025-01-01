type GtagCommand = 'js' | 'config' | 'event';
type GtagArg = Date | string | object;

interface Window {
  dataLayer: GtagArg[][];
  gtag: (command: GtagCommand, ...args: GtagArg[]) => void;
}
