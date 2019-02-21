function ajax() {
    $.ajax({
      //请求地址
      url: '',
      //请求方式
      type: 'POST',

      data: {},            
      //  发送请求前的处理
      beforeSend: function(xhr, settings) {
      
      },
      //  请求成功在此处理
      success: function(data, status, xhr) {

      },
      //  请求失败在此处理
      error: function(xhr, errorType, error) {

      },
      //  请求完成在此处理
      complete: function(xhr, status) {
        
      }
    });
}