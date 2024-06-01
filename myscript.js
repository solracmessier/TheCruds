var rollV, nameV, genderV, addressV, emailV;

function readFom() {
  rollV = document.getElementById("roll").value;
  FirstnameV = document.getElementById("Firstname").value;
  Middlename1 = document.getElementById("Middlename").value;
  Lastname1 = document.getElementById("lastname").value;
  genderV = document.getElementById("gender").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("email").value;
  Swal.fire("Data Read Succesfully!");
  console.log(rollV, nameV, addressV, genderV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      Firstname: FirstnameV,
      Middlename1: Middlename,
      lastname: Lastname1,
      gender: genderV,
      address: addressV,
      email: emailV
    });
    Swal.fire("Data Inserted Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("Firstname").value = "";
  document.getElementById("Middlename").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      document.getElementById("roll").value = snap.val().rollNo;
      document.getElementById("Firstname").value = snap.val().Firstname;
      document.getElementById("Middlename").value = snap.val().Middlename;
      document.getElementById("lastname").value = snap.val().lastname;
      document.getElementById("gender").value = snap.val().gender;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("email").value = snap.val().email;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   rollNo: rollV,
      Firstname: FirstnameV,
      Middlename1: Middlename,
      lastname: Lastname1,
      gender: genderV,
      address: addressV,
      email: emailV
    });
    Swal.fire("Data Updated Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("Firstname").value = "";
  document.getElementById("Middlename").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .remove();
    Swal.fire("Data Deleted Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("Firstname").value = "";
  document.getElementById("Middlename").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};