# Objectives and Outcomes

At the end of this assignment, you should have completed the following tasks:

Integrated the AboutComponent given above into the single page application.
Added a new functional component named <RenderLeader> through the RenderLeader() function to AboutComponent.js that renders the details of a given leader using the reactstrap <Media> component.
Construct and render the list of leaders in the About Us page using the <RenderLeader> component implemented above.
Assignment Requirements

This assignment requires you to complete the following tasks. Detailed instructions for each task are given below. The picture of the completed web page included below indicates the location within the web page that will be updated by the three tasks.

# Task 1

In this task you will be integrating the AboutComponent into the single page application:

First, download the AboutComponent.js given above and move it to the components folder, and
Update the MainComponent.js file to integrate the AboutComponent into the single page application. You should be able to navigate to the AboutComponent by clicking the links in the navigation bar and the footer.

# Task 2

In this task you will implement a new functional component named <RenderLeader> through the RenderLeader() function:

The RenderLeader() function receives the details of a leader as its parameter,
Implement RenderLeader() function to use the Leader information received as a parameter and render the leader information as shown in the screenshot below using the reactstrap <Media> component. Recall how we used the <Media> component in the first module to render the details of a dish in the MenuComponent.
This will make available the <RenderLeader> component for use within your AboutComponent.

# Task 3

In this task you will use the <RenderLeader> component created in the previous task to render a list of leaders within your AboutComponent:

Update the leaders variable within the AboutComponent() function to make use of the <RenderLeader> component to render the list of leaders.