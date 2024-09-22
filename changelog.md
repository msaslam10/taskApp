# Changelog

## [Unreleased]

### Features
- **Task Management**: 
  - Implemented task prioritization, allowing sorting of tasks by priority (High, Medium, Low) even when category filters are applied.
  - Added priority options when creating tasks.
  - Introduced a due date feature for tasks, allowing users to manage deadlines effectively.
  - Displayed categories and tags for tasks to improve organization and visibility.

- **Filtering and Sorting**: 
  - Introduced the ability to filter tasks by category tags.
  - Enhanced task sorting functionality in the `loadTasks` function for better user experience.

- **Profile Management**: 
  - Enhanced profile editing features, including the ability to upload and update profile pictures.
  - Improved UI for the edit profile section, making button positioning more intuitive.
  
### Improvements
- **User Interface Enhancements**:
  - Improved UI for task categorization and prioritization, resulting in a better user experience.
  - Enhanced vertical scrolling for task lists to accommodate more tasks without compromising visibility.
  - Updated styles for filter buttons and task displays for a more cohesive look.

- **Code Improvements**: 
  - Refactored filtering logic to streamline task display based on selected categories.
  - Improved error handling for form inputs to prevent undefined values from appearing.

### Bug Fixes
- Resolved issues with undefined values appearing in task forms.
- Fixed navigation issues in the edit profile section to improve usability.
- Adjusted button colors and padding to ensure consistent styling across the application.
- Fixed issues with the display of the task list in the application.
  
### Documentation
- Added detailed comments and documentation within the codebase for better maintainability and clarity.

## [1.0.0] - 2024-09-23
- Initial release featuring:
  - User authentication with sign-up, login, and password recovery functionalities.
  - Task creation, categorization, and filtering capabilities.
  - Basic profile management features.
  - Implemented sorting and filtering functionalities to enhance user experience with task management.
