(function () {
  var form = document.getElementById("inquiryForm");
  if (!form) return;
  form.addEventListener("submit", function () {
    alert("演示站点：表单不提交数据。正式版本可对接邮件或 CRM。");
  });
})();
