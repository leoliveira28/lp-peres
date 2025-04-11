interface Window {
  gtag: (
    command: 'event',
    action: string,
    params: {
      send_to: string;
      event_callback?: () => void;
      [key: string]: any;
    }
  ) => void;
} 