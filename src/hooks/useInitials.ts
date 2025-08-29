import { useMemo } from 'react';

const useInitials = (fullName: string): string => {
  return useMemo(() => {
    if (!fullName || typeof fullName !== 'string') return '';
    
    const words = fullName.trim().split(/\s+/);
    
    if (words.length === 0) return '';
    if (words.length === 1) return words[0].charAt(0).toUpperCase();
    
    // Get first letter of first word and first letter of last word
    const firstInitial = words[0].charAt(0).toUpperCase();
    const lastInitial = words[words.length - 1].charAt(0).toUpperCase();
    
    return `${firstInitial}${lastInitial}`;
  }, [fullName]);
};

export default useInitials;