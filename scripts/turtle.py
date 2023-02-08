import matplotlib.pyplot as plt
import numpy as np
import random

# Define the vertices of a triangle
vertices = np.array([[-150, -100], [0, 200], [150, -100]])

# Set the starting point for the Chaos Game
start = [0, 0]

# Define the number of iterations
iterations = 1000000

# Initialize the arrays to store the points
x = [start[0]]
y = [start[1]]

# Play the Chaos Game
for i in range(iterations):
    # Choose a random vertex
    vertex = vertices[random.randint(0, 2)]
    
    # Midpoint between the current point and the chosen vertex
    x.append((x[-1] + vertex[0]) / 2)
    y.append((y[-1] + vertex[1]) / 2)

# Plot the points
plt.scatter(x, y, s=0.5, c='black')
plt.show()