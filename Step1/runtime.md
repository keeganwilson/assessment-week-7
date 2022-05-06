                | doublerAppend | doublerInsert |
                |-------------------------------|
tinyArray       | 83.5 μs       | 30.2 μs       |
smallArray      | 119.5 μs      | 50.8 μs       |
mediumArray     | 125.7 μs      | 149.7 μs      |
largeArray      | 458.2 μs      | 8.2297 ms     |
extraLargeArray | 2.9562 ms     | 820.5272 ms   |
                |-------------------------------|

Initial impression:

The runtime of doublerAppend is initially increasing faster than that of 
doublerInsert but somewhere between smallArray and mediumArray the speed of 
doublerInsert becomes larger than that of doublerAppend. After that point, 
doublerInsert's runtime increases at a higher rate than that of doublerAppend. 
I would conclude that doublerAppend's runtime increases linearly while 
doubleInsert's runtime increases parabolically. DoublerAppend scales better 
than doublerInsert.

After doing some more research:

The time complexity of push() is O(1) because it inserts an element at the end 
of the array, so none of the array elements' index has to change.

The time complexity of unshift() is O(n) because it has to increment all the 
elements that already present in the array.

If you put these two methods inside a for loop the time complexities will change 
to O(n) for doublerAppend and O(n ^ 2) for doublerInsert.



