This is my portfolio site to showcase some of the applications I've built. I made it with Next.js Tailwind CSS and Contentful for a CMS.

### Installation

To run the App locally, follow these steps:

1. Set up a Contentful account and Obtain an Access Key and a Space ID

2. create a .env file in the root directory and add the contentful API keys
   
	```CONTENTFUL_ACCESS_KEY='your_contentful_access_key'```
	```CONTENTFUL_SPACE_ID='your_contentful_space_id'```
	
4.  Note:Content model must match Contentful fields in this Front End Application or app won't work
  
5. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/cpsmithsolutions/portfolio-site.git
   ```
   
6. Navigate to the project directory:

7. Start the development server:

	```bash 
	npm start
 	# or
	yarn start
	```