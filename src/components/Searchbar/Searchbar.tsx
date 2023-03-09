import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LocalStorageService from "../../services/LocalStorageService";
import { Post } from "../../interfaces/post.interface";
import Btn from "../Btn/Btn";

export default function Searchbar() {
  // Declare state variables to keep track of input value, suggestions, and show/hide state
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<Post[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Use useEffect hook to fetch suggestions whenever the input value changes
  useEffect(() => {
    const searchSuggestions = async () => {
      // Call fetchSuggestions function to get suggestions based on input value
      const suggestions = await fetchSuggestions(value);
      // Update suggestions state with the filtered results
      setSuggestions(suggestions);
    };

    searchSuggestions();
  }, [value]);

  // Event handler function to update input value and show/hide suggestions
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Update input value state with new value
    setValue(e.target.value);
    // Show suggestions if input value is not empty, hide otherwise
    e.target.value.length > 0
      ? setShowSuggestions(true)
      : setShowSuggestions(false);
  };

  // Event handler function to reset input value and hide suggestions when user clicks on a suggestion
  const handleSuggestionClick = (suggestion: Post) => {
    setValue("");
    setShowSuggestions(false);
  };

  // Helper function to render suggestions as a list of links
  const renderSuggestions = () => {
    if (showSuggestions && suggestions?.length) {
      return (
        <ul className="border border-gray-200" data-testid="suggestions">
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion.id}
              className="text-text py-3 px-5 overflow-hidden cursor-pointer hover:bg-primary hover:animate-pulse"
            >
              <Link
                to={`blog/${suggestion.id}`}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.title}
              </Link>
            </li>
          ))}
        </ul>
      );
    }
    // Return null if there are no suggestions to display or showSuggestions is false
    return null;
  };

  // Helper function to fetch suggestions from LocalStorageService and filter them based on input value
  async function fetchSuggestions(query: string) {
    // If query is empty, return an empty array
    if (!query) return [];

    // Otherwise, fetch all posts from LocalStorageService
    const posts: Post[] = await LocalStorageService.getItem("posts");

    // Filter posts based on title matches to input value
    return posts.filter((post) => {
      const title = post.title.toLowerCase();
      return title.includes(query.toLowerCase());
    });
  }

  // Render search bar and suggestions as a container
  return (
    <div data-testid="search-component" className="relative w-full">
      <div className="flex space-x-2 flex-row">
        <input
          type="text"
          id="search-navbar"
          value={value}
          onChange={handleInputChange}
          className="block w-full p-3 text-sm text-text bg-background3"
          placeholder="ENTER POST NAME..."
        />
        <Btn>Search</Btn>
      </div>
      <div className="bg-background3 shadow-lg  top-14 w-full absolute">
        {renderSuggestions()}
      </div>
    </div>
  );
}
