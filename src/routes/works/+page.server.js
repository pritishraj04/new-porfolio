import { db } from '$lib/database';
import { redirect } from '@sveltejs/kit';

export const actions = {
	addWorks: async () => {
		const data = [
			{
				defaultOrder: 7,
				title: 'Google Clone',
				slug: 'google-clone',
				category: 1,
				tech: ['HTML', 'CSS'],
				img: 'google_clone.webp',
				link: 'https://pritishraj04.github.io/google-clone/',
				desc: `<p class="paragraph">Introducing our impressive Frontend Google Clone project, developed using plain HTML and CSS. This endeavor aims to replicate the iconic Google search engine interface, showcasing our expertise in frontend development. Our primary focus is on creating a responsive mobile-first design, employing cutting-edge techniques that ensure seamless user experiences across devices.</p>
                <p class="paragraph">With meticulous attention to detail, we've crafted a user interface that closely resembles the familiar Google search engine layout. From the search bar to the search results page, our Google Clone provides users with a visually appealing and intuitive experience.</p>
                <p class="paragraph">Embracing the principles of mobile-first development, we've prioritized the creation of a responsive design that adapts to various screen sizes. Whether users access our Google Clone on a desktop, tablet, or smartphone, they can expect a consistent and optimized experience.</p>
                <p class="paragraph">By utilizing HTML and CSS, we've ensured that the Google Clone is lightweight, fast-loading, and accessible across different browsers. The clean and modular codebase allows for easy maintenance and future scalability.</p>
                <p class="paragraph">Our Frontend Google Clone project is a testament to our expertise in crafting visually appealing, responsive, and user-friendly interfaces. Experience the familiarity of Google's search engine while enjoying the smooth performance and seamless responsiveness of our clone. Join us on this exciting journey as we showcase the power of plain HTML and CSS in frontend development.</p>`
			},
			{
				defaultOrder: 2,
				title: 'React Menu',
				slug: 'react-menu',
				category: 1,
				tech: ['ReactJs', 'CSS'],
				img: 'react_menu.webp',
				link: 'https://pritishraj04.github.io/react-menu/',
				desc: `<p class="paragraph">Introducing our impressive Frontend React Menu project, developed using React.js and CSS. This project showcases our expertise in frontend development, with a focus on responsive web design techniques. In addition to its sleek design, our project features a numeric entry-based reactive bill calculator that enables users to see the total bill amount as they add products to their order.</p>
                <p class="paragraph">Our React Menu offers users a visually appealing and intuitive interface that makes browsing and ordering a breeze. With a responsive design, users can access the menu and place their orders from various devices, ensuring a seamless experience.</p>
                <p class="paragraph">The standout feature of our project is the numeric entry-based reactive bill calculator. By entering quantities of selected products, users can see the total bill amount update dynamically, giving them full control over their order and enabling them to make informed decisions. The calculator's modern design and seamless interactivity enhance the ordering process.</p>
                <p class="paragraph">With a focus on responsive web design techniques, our React Menu is optimized for different screen sizes, ensuring a consistent and visually appealing experience across devices. The use of React.js and CSS enables a smooth and efficient user interface, providing a delightful browsing and ordering experience.</p>
                <p class="paragraph">Our Frontend React Menu project is a testament to our expertise in crafting visually appealing, responsive, and user-friendly interfaces. With the inclusion of a numeric entry-based reactive bill calculator, we've enhanced the ordering process and empowered users to create their desired order while staying within their budget. Join us on this exciting journey as we showcase the power of React.js and CSS in frontend development.</p>`
			},
			{
				defaultOrder: 1,
				title: 'Resposnsive homepage',
				slug: 'responsive-homepage',
				category: 1,
				tech: ['HTML', 'CSS'],
				img: 'frontend_homepage.webp',
				link: 'https://pritishraj04.github.io/frontent-homepage-responsive/',
				desc: `<p class="paragraph">Introducing our impressive Frontend Responsive Homepage project, developed using plain HTML and CSS. This project showcases our expertise in frontend development, with a focus on responsive mobile-first design techniques. Our goal is to create a visually appealing and user-friendly homepage that seamlessly adapts to different screen sizes, providing a consistent experience across devices.</p>
                <p class="paragraph">Our Responsive Homepage offers users an engaging and intuitive interface, designed to capture their attention and deliver essential information. Through the use of plain HTML and CSS, we have crafted a clean and well-structured codebase, ensuring a lightweight and efficient implementation.</p>
                <p class="paragraph">With a mobile-first approach, our project prioritizes the development of a responsive design that caters to the needs of mobile users. By employing CSS media queries and responsive layouts, we ensure that the homepage adapts fluidly to different screen sizes, providing an optimal viewing experience on smartphones, tablets, and desktops.</p>
                <p class="paragraph">We have carefully considered the placement and arrangement of content, employing techniques such as grid systems and flexbox to maintain a harmonious layout across different screen sizes. Whether users access our homepage on a small mobile device or a large desktop monitor, they can expect a visually pleasing and well-organized presentation of information.</p>
                <p class="paragraph">Our Frontend Responsive Homepage project is a testament to our expertise in crafting visually appealing and user-friendly interfaces. Through our focus on responsive mobile-first development techniques, we have created a homepage that delivers an exceptional user experience on any device. Join us on this exciting journey as we showcase the power of plain HTML and CSS in frontend development.</p>`
			},
			{
				defaultOrder: 4,
				title: 'Frontend Mentor Challenge',
				slug: 'frontend-mentor-challenge',
				category: 1,
				tech: ['HTML', 'CSS'],
				img: 'frontend_mentor_challenge.webp',
				link: 'https://pritishraj04.github.io/frontent-mentor-card-purple/',
				desc: `<p class="paragraph">Introducing our solution for the frontendmentor.io Stats Preview Card component challenge, developed using plain HTML and CSS. This project showcases our expertise in frontend development, with a focus on responsive mobile-first design techniques. Our solution provides a visually appealing and functional representation of the stats preview card, offering a seamless user experience across devices.</p>
                <p class="paragraph">As a solution to the frontendmentor.io challenge, our project accurately reproduces the Stats Preview Card component, adhering to the provided design specifications. Through the use of plain HTML and CSS, we have crafted a clean and maintainable codebase, ensuring a lightweight and efficient implementation.</p>
                <p class="paragraph">With a mobile-first approach, our project prioritizes the development of a responsive design that seamlessly adapts to different screen sizes. Whether users access our Stats Preview Card on a desktop, tablet, or smartphone, they can expect a consistent and optimized experience, allowing them to easily view and interact with the card's content.</p>
                <p class="paragraph">By utilizing the power of CSS, we have employed various techniques to enhance the visual presentation and interactivity of the Stats Preview Card. The use of media queries, flexbox, and other CSS features ensures a fluid and dynamic layout that caters to different screen sizes and resolutions.</p>
                <p class="paragraph">Our Frontend Stats Preview Card project serves as a testament to our skills in crafting pixel-perfect representations of design challenges. Through our focus on responsive mobile-first development techniques, we have created an engaging and user-friendly experience. Join us as we showcase our mastery of plain HTML and CSS in frontend development.</p>`
			},
			{
				defaultOrder: 6,
				title: 'Laundry App',
				slug: 'laundry-app',
				category: 3,
				tech: ['Sveltekit', 'Supabase'],
				img: 'lgini.webp',
				link: 'https://mystifying-goodall-ca2cf8.netlify.app/',
				desc: `<p class="paragraph">Introducing our comprehensive Full Stack Laundry App, developed using SvelteKit and CSS for the frontend, and Supabase for the backend. This innovative project is designed to simplify the laundry management process, with a focus on seamless login and registration system integration. Additionally, our app offers convenient ordering capabilities and an account system to enhance the overall user experience.</p>
                <p class="paragraph">Our user-friendly interface provides customers with a streamlined platform to manage their laundry needs. With a quick and secure login/register system, users can easily access their accounts and enjoy personalized features.</p>
                <p class="paragraph">One of the key features of our Laundry App is the convenient ordering system. Customers can effortlessly place laundry orders through our intuitive interface, selecting their preferred services, specifying pickup and delivery times, and tracking the progress of their orders.</p>
                <p class="paragraph">To enhance the overall user experience, we've implemented an account system that allows customers to store their preferences, view order history, and receive personalized recommendations. This account system fosters customer loyalty and provides a tailored experience for each user.</p>
                <p class="paragraph">With the powerful combination of SvelteKit and CSS for the frontend and Supabase for the backend, our Full Stack Laundry App delivers a seamless and efficient solution for laundry management. Experience the convenience and simplicity of our app as it revolutionizes the way you handle your laundry needs. Join us on this journey as we transform the laundry experience with our innovative Full Stack Laundry App.</p>`
			},
			{
				defaultOrder: 5,
				title: 'Sveltekit Menu',
				slug: 'sveltekit-menu',
				category: 1,
				tech: ['Sveltekit', 'CSS'],
				img: 'svelte_menu.webp',
				link: 'https://dreamy-pare-0a653b.netlify.app/menu',
				desc: `<p class="paragraph">Introducing our impressive Frontend SvelteKit Menu project, developed using SvelteKit and CSS. This project showcases our expertise in frontend development, with a focus on responsive mobile-first design techniques. In addition to its sleek design, our project features a glassmorphism-styled reactive bill calculator that enables users to see the total bill amount as they add products to their order.</p>
                <p class="paragraph">Our SvelteKit Menu offers users a visually appealing and intuitive interface that makes ordering easy and enjoyable. With a responsive design, users can access the menu and place their orders from anywhere, on any device. The use of SvelteKit and CSS ensures a fast-loading, optimized user experience, even on slower internet connections.</p>
                <p class="paragraph">Our glassmorphism-styled reactive bill calculator takes the ordering experience to the next level. With each product added to the order, users can see the total bill amount update in real-time, giving them complete control over their order and ensuring transparency in the ordering process. The stylish and modern design of the calculator adds a touch of elegance to the ordering process.</p>
                <p class="paragraph">With a focus on responsive mobile-first design techniques, our SvelteKit Menu is optimized for various screen sizes and devices. Whether users access our menu on a desktop, tablet, or smartphone, they can expect a seamless and enjoyable ordering experience.</p>
                <p class="paragraph">Our Frontend SvelteKit Menu project is a testament to our expertise in crafting visually appealing, responsive, and user-friendly interfaces. With our glassmorphism-styled reactive bill calculator, we've taken the ordering process to the next level, ensuring a modern and enjoyable experience for all users. Join us on this exciting journey as we showcase the power of SvelteKit and CSS in frontend development.</p>`
			},
			{
				defaultOrder: 3,
				title: 'MERN TODO',
				slug: 'mern-todo',
				category: 3,
				tech: ['MongoDB', 'ExpressJs', 'ReactJs', 'NodeJs'],
				img: 'mern_todo.webp',
				link: 'https://pritishmernapp.herokuapp.com/login',
				desc: `<p class="paragraph">Introducing our remarkable Full Stack MERN TODO project, developed using MongoDB, Express.js, React.js, and Node.js. This project was created during the learning process of building a MERN stack application, showcasing our expertise in this powerful technology stack. Our app provides a comprehensive solution for managing todos, allowing users to create, update, and delete tasks seamlessly.</p>
                <p class="paragraph">With MongoDB as the database, Express.js for the backend, React.js for the frontend, and Node.js as the runtime environment, our MERN TODO app embodies the principles of a modern and efficient full stack application. Through the combination of these technologies, we have created a robust and scalable solution for todo management.</p>
                <p class="paragraph">During the development of this project, we focused on implementing key features of a todo application, such as task creation, task updating, and task deletion. Users can easily manage their todos through an intuitive user interface, ensuring a smooth and hassle-free experience.</p>
                <p class="paragraph">To make our app accessible to users, we have hosted it using Heroku, a reliable and popular cloud platform. This allows users to access the MERN TODO app from anywhere, anytime, without the need for local installation.</p>
                <p class="paragraph">Our Full Stack MERN TODO project serves as a testament to our dedication to learning and mastering the MERN stack. Join us on this journey as we showcase our expertise in MongoDB, Express.js, React.js, and Node.js, and discover the power of building efficient and scalable full stack applications.</p>`
			},
			{
				defaultOrder: 9,
				title: 'Food dashboard project',
				slug: 'food-dashboard-project',
				category: 3,
				tech: ['Sveltekit', 'Supabase', 'MongoDB', 'Prisma', 'CSS'],
				img: 'food-dashboard.webp',
				link: 'http://fooddashboardproject.vercel.app/',
				desc: `<p class="paragraph">Introducing our powerful Full Stack Food Dashboard project, crafted using SvelteKit, CSS for the frontend, and Supabase, MongoDB, and Prisma for the backend. This exceptional endeavor aims to streamline restaurant management by providing a comprehensive platform that covers every aspect of running a successful eatery. With a focus on quick login and registration system integration, this project revolutionizes the way restaurants handle their operations.</p>
                <p class="paragraph">Upon successful login, users gain access to a feature-rich dashboard where they can perform essential CRUD (Create, Read, Update, Delete) actions. From managing menus and food items to handling reservations and customer interactions, our Food Dashboard empowers restaurant owners to effortlessly oversee and optimize their operations.</p>
                <p class="paragraph">In addition to robust management capabilities, our project also includes an advanced ordering system. Customers can explore the menu, customize their orders, and place them seamlessly through the intuitive interface. By facilitating a smooth ordering process, our Food Dashboard enhances customer satisfaction and simplifies the restaurant's workflow.</p>
                <p class="paragraph">Furthermore, we've integrated an account system to enhance the user experience. Customers can create and manage their accounts, enabling them to store their preferences, view order history, and receive personalized recommendations. This feature fosters customer loyalty and allows restaurants to deliver tailored experiences.</p>
                <p class="paragraph">With the powerful combination of SvelteKit, CSS, Supabase, MongoDB, and Prisma, our Full Stack Food Dashboard project brings efficiency and convenience to restaurant management. Embrace this cutting-edge solution and elevate your establishment to new heights in the highly competitive food industry.</p>`
			},
			{
				defaultOrder: 8,
				title: 'Food Company Website',
				slug: 'food-company-website',
				category: 3,
				tech: ['Sveltekit', 'Supabase', 'MongoDB', 'Prisma', 'CSS'],
				img: 'food-company.webp',
				link: 'https://foodfrontendproject.vercel.app/',
				desc: `<p class="paragraph">Welcome to our remarkable Full Stack Food Company Website project! Built with the powerful combination of SvelteKit and CSS for the frontend, and Supabase, MongoDB, and Prisma for the backend, this project delivers an immersive experience that showcases the offerings of our esteemed food company. Our primary focus is to provide seamless login and registration system integration while enhancing convenience for our users.</p>
                <p class="paragraph">With our user-friendly interface, visitors can explore our wide range of delectable offerings without the need for signup or login. We believe in providing a hassle-free browsing experience that allows customers to easily view our mouthwatering menu, learn about our special promotions, and get a glimpse into the culinary delights we offer.</p>
                <p class="paragraph">For those seeking a more personalized experience, we've implemented a quick and secure login system. Once users successfully login, they gain access to additional features, including the ability to place food orders directly through our website. Whether they are at home, at work, or anywhere within the specified delivery radius, our platform enables users to enjoy our delicious food with just a few clicks.</p>
                <p class="paragraph">To further enhance the ordering process, we've integrated an advanced account system. Users can create and manage their accounts, allowing them to save their favorite orders, track their order history, and receive tailored recommendations based on their preferences. This account system adds a personal touch to the food ordering experience, ensuring that each customer feels valued and appreciated.</p>
                <p class="paragraph">Experience the convenience and culinary delights of our Full Stack Food Company Website. With the winning combination of SvelteKit, CSS, Supabase, MongoDB, and Prisma, we're committed to providing a seamless and satisfying experience for all food enthusiasts. Join us on this gastronomic journey and indulge in a world of flavor, convenience, and exceptional service.</p>`
			},
			{
				defaultOrder: 10,
				title: 'Property Listing Project',
				slug: 'property-listing-project',
				category: 3,
				tech: ['Sveltekit', 'Prisma', 'CSS'],
				img: 'property-listing.webp',
				link: 'https://property-listing-livid.vercel.app/',
				desc: `<p class="paragraph">Introducing our cutting-edge Full Stack Property Listing project</p>
                <p class="paragraph">Developed using SvelteKit, CSS, Prisma, and SQLite, this exceptional endeavor is designed to revolutionize the way users interact with property listings. Our goal is to provide a seamless browsing experience while emphasizing quick login and registration integration.</p>
                <p class="paragraph">At the forefront of this project is a user-friendly interface that simplifies the process of finding and exploring properties. We understand the importance of swift access, which is why we've incorporated a quick login and register system that ensures users can effortlessly engage with our platform.</p>
                <p class="paragraph">Gone are the days of mandatory signup/login procedures for property browsing. With our innovative solution, customers can now browse and shortlist their desired properties without the hassle of creating an account. This frictionless experience allows users to focus solely on their property search, saving valuable time and effort.</p>
                <p class="paragraph">Our frontend implementation, utilizing SvelteKit and CSS, showcases a visually stunning and intuitive design. This ensures an immersive browsing experience that captivates users from the moment they enter the site. Coupled with a responsive and mobile-friendly layout, our platform delivers a seamless experience across all devices.</p>
                <p class="paragraph">Under the hood, our backend is powered by Prisma and SQLite, two robust technologies that ensure efficient data management and seamless integration. With Prisma's powerful querying capabilities and SQLite's lightweight yet reliable database system, we've built a solid foundation that guarantees fast and reliable property listing retrieval.</p>
                <p class="paragraph">In summary, our Full Stack Property Listing project redefines the way customers interact with property listings. By incorporating SvelteKit, CSS, Prisma, and SQLite, we've created an innovative solution that streamlines the login and registration process and provides a hassle-free property browsing experience. Join us on this exciting journey and unlock a world of endless possibilities in the real estate market.</p>`
			}
		];

		data.forEach(async (el) => {
			await db.Works.create({
				data: {
					tech: { connect: el.tech.map((el) => ({ name: el })) },
					title: el.title,
					slug: el.slug,
					category: { connect: { id: el.category } },
					img: el.img,
					link: el.link,
					desc: el.desc,
					defaultOrder: el.defaultOrder
				}
			});
		});
		throw redirect(303, '/');
	},
	addTechnologies: async () => {
		const data = [
			{
				name: 'HTML',
				img: 'html'
			},
			{
				name: 'CSS',
				img: 'css'
			},
			{
				name: 'Sveltekit',
				img: 'sveltekit'
			},
			{
				name: 'Supabase',
				img: 'supabase'
			},
			{
				name: 'Prisma',
				img: 'prisma'
			},
			{
				name: 'MongoDB',
				img: 'mongodb'
			},
			{
				name: 'ExpressJs',
				img: 'expressjs'
			},
			{
				name: 'ReactJs',
				img: 'reactjs'
			},
			{
				name: 'NodeJs',
				img: 'nodejs'
			}
		];

		data.forEach(async (el) => {
			await db.Technologies.create({
				data: {
					name: el.name,
					img: el.img
				}
			});
		});
	},
	addCategories: async () => {
		const data = [
			{
				name: 'frontend'
			},
			{
				name: 'backend'
			},
			{
				name: 'fullstack'
			}
		];

		data.forEach(async (el) => {
			await db.Categories.create({
				data: {
					name: el.name
				}
			});
		});
	}
};
