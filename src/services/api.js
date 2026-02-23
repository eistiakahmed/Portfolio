// API Configuration
const API_BASE_URL = 'https://eistiak-portfolio.vercel.app';

// Simple fetch with error handling
async function fetchAPI(endpoint) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  console.log(`🔄 Fetching from: ${url}`);
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('✅ API Response received:', data);
    return data;
  } catch (error) {
    console.error('❌ Fetch error:', error);
    throw error;
  }
}

// Transform backend project to frontend format
function transformProject(project) {
  return {
    id: project._id,
    title: project.title,
    category: project.category === 'full-stack' ? 'Full Stack' : 
             project.category === 'frontend' ? 'Frontend' : 
             project.category,
    image: project.image,
    description: project.description,
    techStack: project.techStack || [],
    liveLink: project.liveLink,
    gitHubClient: project.gitHubClient,
    gitHubServer: project.gitHubServer,
    gitHubRepo: project.gitHubRepo,
    createdAt: project.createdAt,
  };
}

// Project API
export const projectAPI = {
  getAll: async () => {
    try {
      const response = await fetchAPI('/api/projects');
      
      // Check if response has the expected structure
      if (!response || !response.result || !Array.isArray(response.result)) {
        console.error('Invalid response structure:', response);
        return {
          success: false,
          data: [],
          counts: { all: 0, frontend: 0, fullstack: 0 },
          error: 'Invalid response from server'
        };
      }

      // Transform projects
      const transformedProjects = response.result.map(transformProject);
      
      console.log(`✅ Transformed ${transformedProjects.length} projects`);

      return {
        success: true,
        data: transformedProjects,
        counts: {
          all: response.counts?.all || transformedProjects.length,
          frontend: response.counts?.frontend || 0,
          fullstack: response.counts?.fullstack || 0,
        },
      };
    } catch (error) {
      console.error('❌ Error in projectAPI.getAll:', error);
      return {
        success: false,
        data: [],
        counts: { all: 0, frontend: 0, fullstack: 0 },
        error: error.message || 'Failed to fetch projects'
      };
    }
  },
};

export default projectAPI;
