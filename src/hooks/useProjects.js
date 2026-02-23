import { useState, useEffect } from 'react';
import { projectAPI } from '../services/api';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [counts, setCounts] = useState({ all: 0, frontend: 0, fullstack: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFromAPI, setIsFromAPI] = useState(false);

  const fetchProjects = async () => {
    console.log('🚀 Starting to fetch projects...');
    setLoading(true);
    setError(null);

    try {
      const response = await projectAPI.getAll();
      
      console.log('📦 Response from API:', response);

      if (response.success && response.data && response.data.length > 0) {
        setProjects(response.data);
        setCounts(response.counts);
        setIsFromAPI(true);
        setError(null);
        
        console.log(`✅ Successfully loaded ${response.data.length} projects`);
        console.log('📊 Counts:', response.counts);
      } else {
        setProjects([]);
        setCounts({ all: 0, frontend: 0, fullstack: 0 });
        setIsFromAPI(false);
        setError(response.error || 'No projects found');
        console.warn('⚠️ No projects in response');
      }
    } catch (err) {
      console.error('❌ Error fetching projects:', err);
      setProjects([]);
      setCounts({ all: 0, frontend: 0, fullstack: 0 });
      setIsFromAPI(false);
      setError(err.message || 'Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return {
    projects,
    counts,
    loading,
    error,
    isFromAPI,
    refetch: fetchProjects,
  };
};

export default useProjects;
