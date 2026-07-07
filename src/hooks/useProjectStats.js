import { useState, useEffect } from 'react';
import { projectAPI } from '../services/api';

/**
 * Hook to get project statistics
 * Returns project counts that auto-update when projects are added/removed
 */
export const useProjectStats = () => {
  const [stats, setStats] = useState({
    totalProjects: 0,
    frontendProjects: 0,
    fullStackProjects: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await projectAPI.getAll();
        
        if (response.success) {
          setStats({
            totalProjects: response.counts.all || response.data.length,
            frontendProjects: response.counts.frontend || 0,
            fullStackProjects: response.counts.fullstack || 0,
            loading: false,
            error: null,
          });
        } else {
          setStats(prev => ({
            ...prev,
            loading: false,
            error: response.error,
          }));
        }
      } catch (error) {
        setStats(prev => ({
          ...prev,
          loading: false,
          error: error.message,
        }));
      }
    };

    fetchStats();
  }, []);

  return stats;
};

export default useProjectStats;
