function printAllSubset(arr, ind = 0, currSubSet = []) {
    if (arr.length === ind) {
        console.log(currSubSet);
        return;
    }
    printAllSubset(arr, ind + 1, currSubSet);
    printAllSubset(arr, ind + 1, [...currSubSet, arr[ind]]);
}

printAllSubset([1, 2, 3])