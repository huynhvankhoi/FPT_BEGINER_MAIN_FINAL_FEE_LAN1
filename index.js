$(document).ready(function () {
    // Lấy thông tin từ localStorage và hiển thị trong bảng nếu có
    const listInfor = JSON.parse(localStorage.getItem("data"));
    if (listInfor != null && listInfor.length > 0) {
      listInfor.forEach((item) => {
        var tr = $("<tr></>").html(`<td>${item.Date}</td>
            <td>${item.Anh}</td>
            <td>${item.EventSubject}</td>
            <td>${item.EventFee}</td>
            <td>${item.Speaker}</td>

            <td><a href="#" class="delete">Delete</a></td>`); // Thêm liên kết xóa
  
        $("tbody").append(tr);
      });
    }
  
    // Khai báo các biến lỗi
    let EventSubjectErr = false;
    let DateErr = false;
    let FromErr = false;
    let ToErr = false;
    let RoomErr = false;
    let LocationErr = false;
    let EventDomainErr = false;
    let EventFeeErr = false;
    let SpeakerErr = false;

  
    // Các hàm kiểm tra từng trường dữ liệu
        // Check Even Subject
        $("#ID_EventSubject").on("keyup focus", function () {
            checkEventSubject();
          });
  
          // Check Date
          $("#ID_Date").on("keyup focus", function () {
            checkDate();
          });
  
          // Check From
          $("#ID_From").on("keyup focus", function () {
            checkFrom();
          });

          $("#ID_From").on("change", function () {
            checkFrom();
            state = $("#state option:selected").val();
          });
  
          // Check To
          $("#ID_To").on("keyup focus", function () {
            checkTo();
          });
  
          // Check Room

          $("#ID_Room").on("change", function () {
            checkRoom();
            select = $("#option:selected").val();
          });
  
          // Check Location
          $("#ID_Location").on("keyup focus", function () {
            checkLocation();
          });
  
          // Check Event domain


          $("#ID_EventDomain").on("change", function () {
            checkEventDomain();
            select = $("#option:selected").val();
          });
  
          // Check Event Fee
          $("#ID_EventFee").on("keyup focus", function () {
            checkEventFee();
          });
  
          // Check Speaker

          $("#ID_Speaker").on("change", function () {
            checkSpeaker();
            select = $("#option:selected").val();
          });
  
          
    // Kiểm tra trường First Name
    function checkEventSubject() {
      const regex = /^[a-zA-Z]+$/;
      let EventSubject = $("#ID_EventSubject").val();
      if (EventSubject.length == "") {
        $("#first-name-err").show();
        $("#first-name-err").text("Vui lòng nhập Event Supject");
        EventSubjectErr = false;
      } else if (!regex.test(EventSubject)) {
        $("#first-name-err").show();
        $("#first-name-err").text("Vui lòng nhập đúng định dạng Event Supject");
        EventSubjectErr = false;
      } else {
        $("#first-name-err").hide();
        EventSubjectErr = true;
      }
    }


    // Kiểm tra trường Location
    function checkLocation() {
        const regex = /^[a-zA-Z]+$/;
        let Location = $("#ID_EventSubject").val();
        if (Location.length == "") {
            $("#first-name-err").show();
            $("#first-name-err").text("Vui lòng nhập Location");
            LocationErr = false;
        } else if (!regex.test(Location)) {
            $("#first-name-err").show();
            $("#first-name-err").text("Vui lòng nhập đúng định dạng Location");
            LocationErr = false;
        } else {
            $("#first-name-err").hide();
            LocationErr = true;
        }
        }
    // Kiểm tra trường Date from to
    function checkLocation() {
        const regex = /^[a-zA-Z]+$/;
        let Location = $("#ID_EventSubject").val();
        if (Location.length == "") {
            $("#first-name-err").show();
            $("#first-name-err").text("Vui lòng nhập Location");
            LocationErr = false;
        } else if (!regex.test(Location)) {
            $("#first-name-err").show();
            $("#first-name-err").text("Vui lòng nhập đúng định dạng Location");
            LocationErr = false;
        } else {
            $("#first-name-err").hide();
            LocationErr = true;
        }
        }
    
    // Kiểm tra trường even fee
    function checkLocation() {
        const regex = /^[a-zA-Z]+$/;
        let Location = $("#ID_EventSubject").val();
        if (Location.length == "") {
            $("#first-name-err").show();
            $("#first-name-err").text("Vui lòng nhập Location");
            LocationErr = false;
        } else if (!regex.test(Location)) {
            $("#first-name-err").show();
            $("#first-name-err").text("Vui lòng nhập đúng định dạng Location");
            LocationErr = false;
        } else {
            $("#first-name-err").hide();
            LocationErr = true;
        }
        }
        
        // Kiểm tra trường List
    function checkLocation() {
        const regex = /^[a-zA-Z]+$/;
        let Location = $("#ID_EventSubject").val();
        if (Location.length == "") {
            $("#first-name-err").show();
            $("#first-name-err").text("Vui lòng nhập Location");
            LocationErr = false;
        } else if (!regex.test(Location)) {
            $("#first-name-err").show();
            $("#first-name-err").text("Vui lòng nhập đúng định dạng Location");
            LocationErr = false;
        } else {
            $("#first-name-err").hide();
            LocationErr = true;
        }
        }

        //--------
    // Kiểm tra trường Last Name
    function checkLastName() {
      const regex = /^[a-zA-Z]+$/;
      let lastName = $("#last-name").val();
      if (lastName.length == "") {
        $("#last-name-err").show();
        $("#last-name-err").text("Vui lòng nhập tên");
        lastNameErr = false;
      } else if (!regex.test(lastName)) {
        $("#last-name-err").show();
        $("#last-name-err").text("Vui lòng nhập đúng định dạng tên");
        lastNameErr = false;
      } else {
        $("#last-name-err").hide();
        lastNameErr = true;
      }
    }
  
    // Kiểm tra trường Email
    function checkEmail() {
      const regex = /^[a-zA-Z0-9]+@fsoft.com.vn$/;
      let email = $("#email").val();
      if (email.length == 0) {
        $("#email-err").show();
        $("#email-err").text("Vui lòng nhập email");
        emailErr = false;
      } else if (!regex.test(email)) {
        $("#email-err").show();
        $("#email-err").text("Vui lòng nhập đúng định dạng email");
        emailErr = false;
      } else {
        $("#email-err").hide();
        emailErr = true;
      }
    }
  
    // Kiểm tra trường Phone
    function checkPhone() {
      const regex = /^(03|09|08)\d{8}$/g;
      let phone = $("#phone").val();
      if (phone.length == 0) {
        $("#phone-err").show();
        $("#phone-err").text("Vui lòng nhập số điện thoại");
        phoneErr = false;
      } else if (!regex.test(phone) || phone.length > 10) {
        $("#phone-err").show();
        $("#phone-err").text("Vui lòng nhập đúng định dạng số điện thoại");
        phoneErr = false;
      } else {
        $("#phone-err").hide();
        phoneErr = true;
      }
    }
  
    // Kiểm tra trường Address
    function checkAddress() {
      const regex = /^[a-zA-Z0-9]+$/;
      let address = $("#address").val();
      if (address.length == 0) {
        $("#address-err").show();
        $("#address-err").text("Vui lòng nhập địa chỉ");
        addressErr = false;
      } else if (!regex.test(address)) {
        $("#address-err").show();
        $("#address-err").text("Vui lòng nhập đúng định dạng địa chỉ");
        addressErr = false;
      } else {
        $("#address-err").hide();
        addressErr = true;
      }
    }
  
    // Kiểm tra trường City
    function checkCity() {
      const regex = /^[a-zA-Z0-9]+$/;
      let city = $("#city").val();
      if (city.length == 0) {
        $("#city-err").show();
        $("#city-err").text("Vui lòng nhập thành phố");
        cityErr = false;
      } else if (!regex.test(city)) {
        $("#city-err").show();
        $("#city-err").text("Vui lòng nhập đúng định dạng thành phố");
        cityErr = false;
      } else {
        $("#city-err").hide();
        cityErr = true;
      }
    }
  
    // Kiểm tra trường Zip Code
    function checkZipCode() {
      const regex = /^\d{5}$/g;
      let code = $("#code").val();
      if (code.length == 0) {
        $("#code-err").show();
        $("#code-err").text("Vui lòng nhập zip code");
        codeErr = false;
      } else if (!regex.test(code) || code.length > 5) {
        $("#code-err").show();
        $("#code-err").text("Vui lòng nhập đúng định dạng zip code");
        codeErr = false;
      } else {
        $("#code-err").hide();
        codeErr = true;
      }
    }
  
    // Kiểm tra trường Name On Card
    function checkCardName() {
      const regex = /^[a-zA-Z]+$/;
      let card = $("#card").val();
      if (card.length == 0) {
        $("#card-err").show();
        $("#card-err").text("Vui lòng nhập tên chủ thẻ");
        cardErr = false;
      } else if (!regex.test(card)) {
        $("#card-err").show();
        $("#card-err").text("Vui lòng nhập đúng định dạng tên chủ thẻ");
        cardErr = false;
      } else {
        $("#card-err").hide();
        cardErr = true;
      }
    }
  
    // Kiểm tra trường Credit Card Number
    function checkCreditCard() {
      const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/g;
      let credit = $("#credit").val();
      if (credit.length == 0) {
        $("#credit-err").show();
        $("#credit-err").text("Vui lòng nhập số thẻ");
        creditErr = false;
      } else if (!regex.test(credit)) {
        $("#credit-err").show();
        $("#credit-err").text("Vui lòng nhập đúng định dạng số thẻ");
        creditErr = false;
      } else {
        $("#credit-err").hide();
        creditErr = true;
      }
    }
  
    // Tự động thêm dấu gạch nối sau mỗi cụm 4 số
    $("#credit").on("input", function () {
      const regex = /^\d{1,4}$/g;
      let creditCard = $("#credit").val();
      let result = creditCard.match(/\d{1,4}/g);
  
      if (result != null) {
        creditCard = result.join("-");
      }
      $("#credit").val(creditCard);
    });
  
    // Kiểm tra trường Exp Month
    function checkMonth() {
      const regex = /^\d{1,2}$/g;
      let month = $("#month").val();
      if (month.length == 0) {
        $("#month-err").show();
        $("#month-err").text("Vui lòng nhập tháng");
        monthErr = false;
      } else if (
        !regex.test(month) ||
        Number(month) > 12 ||
        Number(month) < 1
      ) {
        $("#month-err").show();
        $("#month-err").text("Vui lòng nhập đúng định dạng tháng");
        monthErr = false;
      } else {
        $("#month-err").hide();
        monthErr = true;
      }
    }
  
    // Kiểm tra trường Exp Year
    function checkYear() {
      const regex = /^\d{4}$/g;
      let year = $("#year").val();
      if (year.length == 0) {
        $("#year-err").show();
        $("#year-err").text("Vui lòng nhập năm");
        yearErr = false;
      } else if (!regex.test(year) || Number(year) < 2000) {
        $("#year-err").show();
        $("#year-err").text("Vui lòng nhập đúng định dạng năm");
        yearErr = false;
      } else {
        $("#year-err").hide();
        yearErr = true;
      }
    }
  
    // Kiểm tra trường CVV
    function checkCVV() {
      const regex = /^\d{3}$/g;
      let cvv = $("#cvv").val();
      if (cvv.length == 0) {
        $("#cvv-err").show();
        $("#cvv-err").text("Vui lòng nhập mã CVV");
        cvvErr = false;
      } else if (!regex.test(cvv)) {
        $("#cvv-err").show();
        $("#cvv-err").text("Vui lòng nhập đúng định dạng mã CVV");
        cvvErr = false;
      } else {
        $("#cvv-err").hide();
        cvvErr = true;
      }
    }
  
    // Kiểm tra trường State
    function checkState() {
      stateVal = $("#state option:selected").val();
      if (stateVal == "Choose...") {
        $("#state-err").show();
        selected = false;
      } else {
        $("#state-err").hide();
        selected = true;
      }
    }
  
    // Kiểm tra trường Check me Out
    function checkCheckBox() {
      checkBox = $("#check-box").is(":checked");
      if (checkBox == false) {
        $("#check-box-err").show();
      } else {
        $("#check-box-err").hide();
      }
    }
  
    // Gọi hàm kiểm tra khi người dùng nhập liệu
    $("#first-name").keyup(function () {
      checkFirstName();
    });
    $("#last-name").keyup(function () {
      checkLastName();
    });
    $("#email").keyup(function () {
      checkEmail();
    });
    $("#phone").keyup(function () {
      checkPhone();
    });
    $("#address").keyup(function () {
      checkAddress();
    });
    $("#city").keyup(function () {
      checkCity();
    });
    $("#code").keyup(function () {
      checkZipCode();
    });
    $("#card").keyup(function () {
      checkCardName();
    });
    $("#credit").keyup(function () {
      checkCreditCard();
    });
    $("#month").keyup(function () {
      checkMonth();
    });
    $("#year").keyup(function () {
      checkYear();
    });
    $("#cvv").keyup(function () {
      checkCVV();
    });
    $("#state").change(function () {
      checkState();
    });
    $("#check-box").change(function () {
      checkCheckBox();
    });
  
    // Khi người dùng nhấn nút Sign In
    $("#sign-in").click(function () {
      checkFirstName();
      checkLastName();
      checkEmail();
      checkPhone();
      checkAddress();
      checkCity();
      checkZipCode();
      checkCardName();
      checkCreditCard();
      checkMonth();
      checkYear();
      checkCVV();
      checkState();
      checkCheckBox();
  
      // Nếu tất cả kiểm tra đều đúng
      if (
        firstNameErr == true &&
        lastNameErr == true &&
        emailErr == true &&
        phoneErr == true &&
        addressErr == true &&
        cityErr == true &&
        codeErr == true &&
        cardErr == true &&
        creditErr == true &&
        monthErr == true &&
        yearErr == true &&
        cvvErr == true &&
        selected == true &&
        checkBox == true
      ) {
        // Lấy giá trị của các trường
        let fullName = $("#first-name").val() + " " + $("#last-name").val();
        let email = $("#email").val();
        let phone = $("#phone").val();
        let address =
          $("#address").val() +
          ", " +
          $("#city").val() +
          ", " +
          stateVal +
          ", " +
          $("#code").val();
        let card = $("#card").val();
        let credit = $("#credit").val();
        let exp = $("#month").val() + "/" + $("#year").val();
        let cvv = $("#cvv").val();
  
        // Thêm thông tin vào bảng
        var tr = $("<tr></>").html(`<td>${fullName}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${address}</td>
            <td>${card}</td>
            <td>${credit}</td>
            <td>${exp}</td>
            <td>${cvv}</td>
            <td><a href="#" class="delete">Delete</a></td>`);
  
        $("tbody").append(tr);
  
        // Lưu thông tin vào localStorage
        let oldData = JSON.parse(localStorage.getItem("data")) || [];
        oldData.push({
          fullName: fullName,
          email: email,
          phone: phone,
          address: address,
          card: card,
          credit: credit,
          exp: exp,
          cvv: cvv,
        });
        localStorage.setItem("data", JSON.stringify(oldData));
  
        // Xóa các trường sau khi thêm
        $("#first-name").val("");
        $("#last-name").val("");
        $("#email").val("");
        $("#phone").val("");
        $("#address").val("");
        $("#city").val("");
        $("#code").val("");
        $("#card").val("");
        $("#credit").val("");
        $("#month").val("");
        $("#year").val("");
        $("#cvv").val("");
        $("#state").val("Choose...");
        $("#check-box").prop("checked", false);
      }
    });
  
    // Xử lý sự kiện khi người dùng nhấn nút Delete
    $(document).on("click", ".delete", function (e) {
      e.preventDefault();
      let currentRow = $(this).closest("tr");
      let index = $(this).closest("tr").index();
  
      $("#confirm-delete").modal("show");
  
      $("#btnYes").click(function () {
        currentRow.remove();
        let oldData = JSON.parse(localStorage.getItem("data")) || [];
        oldData.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(oldData));
        $("#confirm-delete").modal("hide");
      });
    });
  });
  