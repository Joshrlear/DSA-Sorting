# DSA-Sorting

## Understanding merge sort
 - What is the resulting list that will be sorted after 3 recursive calls to      mergesort?
 > array: [ 1, 21, 26, 45 ] count: 3

 - What is the resulting list that will be sorted after 16 recursive calls to     mergesort?
 > Array is completely sorted by 15 calls. array: [ 1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49 ] count: 15

 - What are the first 2 lists to be merged?
 > merge, array: [ 1, 21 ] count: 1 | merge, array: [ 26, 45 ] count: 2

 - Which two lists would be merged on the 7th merge?
 > left: [ 1, 21, 26, 45 ] right: [ 2, 9, 28, 29 ]