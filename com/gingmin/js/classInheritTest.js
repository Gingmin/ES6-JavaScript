class Parent {
    set name(value) {
        this.name = value;
    }
    parseData() {
        this.parseAttribute();
        this.parseTableData("안녕");
    }
    parseAttribute() {
        console.log("부모입니다.");
    }
}

class Son extends Parent {
    parseAttribute() {
        super.parseAttribute();
        console.log("자식입니다.");
    }s
    parseTableData(value) {
        console.log(`${value}, 자식 파싱함수입니다.`);
    }
}