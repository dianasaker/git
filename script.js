var name1 = "diana",
    name2 = "ayanl",
    i=0,
    x,
    count = 0;

for (i=0; i < 5; i++) {
	if (name1[i] == name2[i]) {
		count++;
	}
}
if (count >= 2) {
	x = true;
	alert(x);
	alert(count);
}
if (count < 2) {
	x = false;
	alert(x);
	alert(count);
}

