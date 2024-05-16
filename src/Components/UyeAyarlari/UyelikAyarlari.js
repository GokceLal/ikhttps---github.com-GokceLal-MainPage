function openCompanySettings(companyName) {
    document.getElementById('companyName').innerHTML = companyName;
    document.getElementById('companySettingsModal').style.display = 'block';
    // Buraya şirketin ayarlarını yükleme işlemi eklenecek

    // Örnek olarak, varsayılan değerlerle input alanları doldurulabilir
    document.getElementById('email').value = "ornek@ornek.com";
    document.getElementById('contactName').value = "Örnek Yetkili";
    document.getElementById('phoneNumber').value = "1234567890";

    // Güncelle ve Bilgilere Bak butonlarını göster
    document.getElementById('updateButton').style.display = 'block';
    document.getElementById('viewInfoButton').style.display = 'block';
}

function closeCompanySettings() {
    document.getElementById('companySettingsModal').style.display = 'none';
}

function updateCompanySettings() {
    // Input alanlarından güncel değerleri al
    var email = document.getElementById('email').value;
    var contactName = document.getElementById('contactName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    // Şirket ayarlarını güncelleme işlemini gerçekleştir
    // Örneğin, burada AJAX kullanarak backend'e bu bilgileri gönderebilirsin
    // Bu örnekte, sadece konsola loglama yapıldı
    console.log("E-posta: " + email);
    console.log("Yetkili Adı: " + contactName);
    console.log("Telefon Numarası: " + phoneNumber);

    // Örneğin, bu verileri bir nesne oluşturup başka bir fonksiyona gönderebilirsin
    var updatedSettings = {
        email: email,
        contactName: contactName,
        phoneNumber: phoneNumber
    };

    // Güncellenmiş ayarları işle
    processUpdatedSettings(updatedSettings);

    // Güncellenmiş verileri görüntüle
    viewCompanyInfo();
}

function processUpdatedSettings(updatedSettings) {
    // Burada güncellenmiş ayarları işleme alabilirsin
    // Örneğin, bir AJAX isteği ile bu bilgileri backend'e gönderebilir ve orada kaydedebiliriz
    // Bu örnekte, sadece konsola loglama yapıldı
    console.log("Güncellenmiş ayarlar:", updatedSettings);
}

function viewCompanyInfo() {
    // Güncellenmiş verileri görüntülemek için modal penceresine içerik ekleyelim
    var companyInfoContent = "<h3>Şirket Bilgileri</h3>";
    companyInfoContent += "<p><strong>E-posta:</strong> " + document.getElementById('email').value + "</p>";
    companyInfoContent += "<p><strong>Yetkili Adı:</strong> " + document.getElementById('contactName').value + "</p>";
    companyInfoContent += "<p><strong>Telefon Numarası:</strong> " + document.getElementById('phoneNumber').value + "</p>";

    document.getElementById('companySettings').innerHTML = companyInfoContent;
}


function sendEmail() {
    var email = document.getElementById('email').value;
    var contactName = document.getElementById('contactName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    
    // E-posta gönderme işlemini gerçekleştir
    // Burada gerçek bir e-posta gönderme işlemi gerçekleştirecek bir kod olmalıdır

    // Örneğin, bu özelliklerin doğru bir şekilde alındığını konsola yazdırabiliriz
    console.log("E-posta: " + email);
    console.log("Yetkili Adı: " + contactName);
    console.log("Telefon Numarası: " + phoneNumber);
}

function openNewCompanyForm() {
    document.getElementById('companyName').innerHTML = "Yeni Şirket";
    document.getElementById('companySettingsModal').style.display = 'block';
    // E-posta, yetkili adı ve telefon numarası girmek için input alanlarını göster
    document.getElementById('email').style.display = 'block';
    document.getElementById('contactName').style.display = 'block';
    document.getElementById('phoneNumber').style.display = 'block';
    // E-posta gönder butonunu ekle
    var sendEmailButton = document.createElement("button");
    sendEmailButton.innerHTML = "E-posta Gönder";
    sendEmailButton.onclick = sendEmail;
    document.getElementById('companySettings').appendChild(sendEmailButton);
    // Güncelle ve Bilgilere Bak butonlarını gizle
    document.getElementById('updateButton').style.display = 'none';
    document.getElementById('viewInfoButton').style.display = 'none';
}
