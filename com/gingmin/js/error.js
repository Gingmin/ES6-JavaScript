let json = '{ "age": 30 }';

try {
    let user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("불완전한 데이터: 이름 없음");
    }
    blabla();
    alert(user.name);
} catch (e) {
    if (e instanceof SyntaxError) {
        alert("JSON Error : " + e.message);
    } else {
        throw e;
    }
}