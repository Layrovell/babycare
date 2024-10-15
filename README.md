### For backend integrations, comment in the code where you would implement specific APIs and a brief description to explain the logic.

#### API Layer
The API layer is where all the magic happens for connecting the app to the backend. It handles getting or sending data, like pulling baby stats (weight, diapers, etc.). I'd use this layer to keep things organized, like managing user authorization and handling errors, while keeping the backend stuff separate from the UI.

#### Handling API requests
I'd use TanStack Query to manage all the network requests. It’s great for fetching data and storing the responses in a way that makes everything run smoothly without a lot of extra effort.

#### Services
To keep things clean, I'd organize API calls into services. I'd have different ones for different tasks: one for user profiles, another for baby stats, and another for milestones. It helps keep the code easy to work with and maintain as things grow.
