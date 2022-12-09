function Human(strName, strAge, strJob) {
    this.name = strName;
    this.age = strAge;
    this.job = strJob;
}

newObject1 = new Human("김주환", "30", "프로그래머");
newObject2 = new Human("배롱", "43", "마스터엔지니어");

document.write(newObject1.name);