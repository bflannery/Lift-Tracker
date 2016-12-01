## Gym-Tracker


Elevator Pitch: Are you looking to track your athletes strengths and weakness throughout a lifting cycle to evaluate performance strengths and weakness? Gym-Tracker will allow gym owners to:
- Register Gym Athletes basic profile info(age, height, weight, etc)
- Set daily/weekly workout routines
- Let Athletes fill out their individual efforts on each routine
- Allow Athletes see their previous workouts logged
- Allow Gym Owners to see overall athlete performance to find strengths/weakness of the programming cycle

- Features

   - User profile
	- display previously logged workouts
        - display chart/graphics to represent their progress

 	 - Gym Owner’s Profile
      		  - Set daily/weekly workout routines
      		  - See overall gym performance on graphs
           		  - average times/weight lifted
            	  - athlete strengths/weaknesses
 	 - API

       		 - Under Armour
           - ![Alt text](./app/assets/images/UA Data1.png?=raw)
           - ![Alt text](./app/assets/images/UA Data2.png?=raw)
           
	- Routes
		- Login
			- To gain access as Owner
			- To gain access as athlete
		- Register
			- New User Form
		- Home/:User
			- Today’s Workout with inputs for athlete performance
			- Notes from the coach
			- Link to videos on movements
			- See other Athletes performance in a feed
		- Home/Owner
			- Set Today’s Workout Form
			- Set Notes
			- See overall gym performance on previous workouts
			- See overall gym performance on previous cycles
		-/Profile/:id
			- Display user profile picture
			- Display previous workouts logged
			- Performance chart of previous workout
			
			
- MVP 
	- Owner Registartion/Login/LogOut
	- Logged in user can view Movement Libray
	- Logged in user can create/save workouts
	- Logged in user can create/save cycles
	- Logged in user can view/edit their workouts/cycles
