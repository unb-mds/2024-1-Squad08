function verifyCpf(somecpf) {
    let zetta = somecpf; //clones (or at least attempts to clone) so original int object doesn't get fumbled by function.
    zetta.replaceAll(".", "");
    zetta.replaceAll("-", "");
    let v1, v2;
    v1 = 0; v2 = 0;
    for (i = 0; i < zetta.length - 2; i += 1) { 
        v1 += Number(zetta[i]) * (9 - (i % 10));
        v2 += Number(zetta[i]) * (9 - ((i + 1) % 10));
    }
    v1 = (v1 % 11) % 10;
    v2 += v1 * 9;
    v2 = (v2 % 11) % 10;
    if (v1 == zetta[zetta.length - 1] && v2 == zetta[zetta.length - 2]) { //verify last digits are equal to math done earlier. 
        return true //if it is,
    }
    else { 
        return false
    }
};

export default verifyCpf;