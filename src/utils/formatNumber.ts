export const formatNumber = (num: number | undefined): string => {
    if (num === undefined || num === null) {
      return 'N/A';
    }
  
    if (num >= 1e9) {
      return (num / 1e9).toFixed(1) + 'B';
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + 'M';
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + 'K';
    } else {
      return num.toString();
    }
  };