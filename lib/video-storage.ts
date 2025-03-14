import { VideoCategory } from "@/components/facebook-video-layout";

const STORAGE_KEY = 'nazindy-facebook-videos';

// Save video categories to localStorage
export const saveVideoCategories = (categories: VideoCategory[]): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(categories));
  } catch (error) {
    console.error('Error saving video categories:', error);
  }
};

// Load video categories from localStorage
export const loadVideoCategories = (): VideoCategory[] | null => {
  if (typeof window === 'undefined') return null;
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    return JSON.parse(data) as VideoCategory[];
  } catch (error) {
    console.error('Error loading video categories:', error);
    return null;
  }
};

// Merge predefined categories with saved ones
export const mergeVideoCategories = (
  predefined: VideoCategory[], 
  saved: VideoCategory[] | null
): VideoCategory[] => {
  if (!saved) return predefined;
  
  // Create a map of the predefined categories by ID
  const predefinedMap = new Map<string, VideoCategory>();
  predefined.forEach(category => {
    predefinedMap.set(category.id, {...category});
  });
  
  // Merge saved categories into the map
  saved.forEach(savedCategory => {
    const predefinedCategory = predefinedMap.get(savedCategory.id);
    
    if (predefinedCategory) {
      // Merge videos from saved category with predefined
      // Create a map of predefined videos by ID
      const videoMap = new Map();
      predefinedCategory.videos.forEach(video => {
        videoMap.set(video.id, video);
      });
      
      // Add or update videos from saved category
      savedCategory.videos.forEach(video => {
        videoMap.set(video.id, video);
      });
      
      // Convert map back to array
      predefinedCategory.videos = Array.from(videoMap.values());
    } else {
      // Add new category that wasn't in predefined
      predefinedMap.set(savedCategory.id, savedCategory);
    }
  });
  
  return Array.from(predefinedMap.values());
}; 