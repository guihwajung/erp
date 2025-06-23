﻿/**
*  컨설팅 표준화 작업
*  @FileName 	Message.js 
*  @Creator 	consulting
*  @CreateDate 	2017.03.08
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2017.03.08     	consulting 	          	    최초 생성 
*  2017.10.17     	consulting  	           	주석 정비
*  2018.01.16		consulting					gfnGetApplication 공통함수 변경
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/**
 * @class 메세지팝업오픈
 * @param {String} sMsgId - 메세지ID	
 * @param {Array} arrArg - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @param {String} [sPopId] - 팝업ID(하나의 callback함수에서 중복된 메시지 처리를 할 경우 PopId구분을 위해 unique한 ID 반드시 사용)
 * @param {String} [sCallback] - 팝업콜백 (confirm성 메시지를 사용시 반드시 필요)
 * @return N/A
 */
pForm.gfnConfirm = function (sMsgTxt, sCallback, sPopId)
{
	var sMsgId = "confirm.err.validator";
	var arrArg = [sMsgTxt];
	this.gfnAlert(sMsgId, arrArg, sPopId, sCallback);
};
pForm.gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
{
    var objApp = pForm.gfnGetApplication();
	if(!this.gfnIsNull(sMsgId) && sMsgId.indexOf('msg.') == -1 && sMsgId.indexOf('confirm.') == -1 && sMsgId.indexOf('notice.') == -1) {
		if(!this.gfnIsNull(arrArg)) {
			sCallback = arrArg;
		}
		arrArg = [sMsgId];
		sMsgId = "msg.err.validator";
	}
	if(objApp.gdsMessage.findRow("msgId", sMsgId) < 0) return false;

	var sColumn  = "msgText";
	var sMsg = objApp.gdsMessage.lookup("msgId", sMsgId, sColumn);

	if( this.gfnIsNull(sMsg) ) sMsg = "확인";
	// 줄바꿈 변경
	sMsg = sMsg.replace(/\\n/g, String.fromCharCode(10));
	sMsg =  pForm.gfnConvertMessage(sMsg, arrArg);
	
	var sMsgType = objApp.gdsMessage.lookup("msgId", sMsgId, "msgType");	
	if( this.gfnIsNull(sPopId) ) sPopId = sMsgId + "_" + (new Date()).toISOString();
	
	var sMsgUrl ="";
	switch(sMsgType) {
		case "A":
			sMsgUrl = "cmm::cmmAlert.xfdl";
			break;
		case "C":
			sMsgUrl = "cmm::cmmConfirm.xfdl";
			if(this.gfnIsNull(sCallback)) trace("callback함수를 지정하지 않았습니다");
			break;
		case "N":
			sMsgUrl = "cmm::cmmNotice.xfdl";
			break;
	}
	
	var oArg = {paramContents:sMsg};
	var oOption = {titlebar:"true"};
	
	// messagePopup
	//if (nexacro.getEnvironmentVariable("evMessagePopup") == "true") {
		// 확실한 메세지창 포커스를 위해서 timer로 실행
		this.gfnSetTimer(this,
			function() {
				this.gfnOpenPopup(sPopId,sMsgUrl,oArg,sCallback,oOption);
			},
		51);
// 	}
// 	// alert-cofirm
// 	else {
// 		if (sMsgType == "A") {
// 			alert(sMsg);
// 		}
// 		else {
// 			confirm(sMsg);
// 		}
// 	}
};

/**
 * @class 메세지 치환
 * @param {String} msg - 메세지	
 * @param {Array} values - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @return {String}
 */
pForm.gfnConvertMessage = function(msg, values) 
{
    return msg.replace(/\{(\d+)\}/g, function() {
        return values[arguments[1]];
    });
};

/**
 * @class 메세지 치환 후 완성된 메시지 리턴
 * @param {String} sMsgId - 메세지ID	
 * @param {Array}  arrArg - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @return {String}
 */
pForm.gfnGetMessage = function(sMsgId, arrArg) 
{
    var objApp = pForm.gfnGetApplication();
	if(objApp.gdsMessage.findRow("msgId", sMsgId) < 0) return false;

	var sColumn  = "msgText";
	var sMsg = objApp.gdsMessage.lookup("msgId", sMsgId, sColumn);

	// 줄바꿈 변경
	sMsg = sMsg.replace(/\\n/g, String.fromCharCode(10));
	sMsg =  pForm.gfnConvertMessage(sMsg, arrArg);
	
	return sMsg;
};