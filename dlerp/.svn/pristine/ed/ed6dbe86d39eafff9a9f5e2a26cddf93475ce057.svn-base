/**
*  컨설팅 표준화 작업
*  @FileName 	Frame.js 
*  @Creator 	consulting
*  @CreateDate 	2017.03.08
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2017.03.08     	consulting 	                최초 생성 
*  2018.01.16	    consulting					gfnGetApplication 추가				   
*******************************************************************************
*/

var pForm  = nexacro.Form.prototype;
var sysver = "nexacro17"; // 넥사크로 제품구분 nexacro14/nexacro17

/**
* @class frame open <br>
* @param {Object} obj - 화면
* @return N/A
* @example 
* this.gfnFormOnLoad(this);
*/
pForm.gfnFormOnLoad = function(objForm, isData, isSub)
{
	if(isData==null) isData = false;
	if(isSub==null) isSub = false;
	var arrComp = objForm.components;
	var nLength = arrComp.length;
	var isSearch = false;
	this.gfnGetFormArguments(objForm);
	
	for (var i=0; i<nLength; i++)
	{
		if (arrComp[i] instanceof nexacro.Div)
		{
			// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
			if (this.gfnIsNull(arrComp[i].url)) {
				if(objForm.getOwnerFrame().form["divTopBtn"] == null) {
					if(!isSearch && arrComp[i].id=="divSearch") {
						isSearch = true;
						//this._set_frame_btn(objForm, arrComp, nLength, i+1);
						this._set_frame_btn(objForm, arrComp, nLength, i+1, true);
						nLength++;
					}
					else if(!isSearch && arrComp[i].id=="divData" && arrComp[i].cssclass == "div_DATA_Bg") {
						isSearch = true;
						this._set_frame_btn(objForm, arrComp, nLength, i, false);
						nLength++;
					}
				} else {
					objForm.divTopBtn = objForm.getOwnerFrame().form["divTopBtn"];
				}
				
				// divData 안의 텍스트박스에 대한 키입력시 form status 변경을 위한 처리
				var isTmp = (arrComp[i].id=="divData"?true:false);
				if(arrComp[i].sub == "true") {
					isSub = true;
				}
				if(isData == true) {
					isTmp = true;
				}
				this.gfnFormOnLoad(arrComp[i].form, isTmp, isSub); //재귀함수
			}
			
			if (arrComp[i].cssclass == "div_SEARCH_Bg") {
				arrComp[i].set_formscrolltype("none");
				// 조회조건 영역의 코드파인드 IsSearch 적용
				this.gfnSetSearchCodeFind(arrComp[i]);
			}
		}
		else if (arrComp[i] instanceof nexacro.Tab)
		{
			var nPages = arrComp[i].tabpages.length;
			
			for (var j=0; j<nPages;j++)
			{	
				// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
				if (this.gfnIsNull(arrComp[i].tabpages[j].url))
					this.gfnFormOnLoad(arrComp[i].tabpages[j].form, isData, isSub); //재귀함수
			}
		}
		else
		{
			if (arrComp[i] instanceof nexacro.Grid)
			{
				this.gfnSetGrid(arrComp[i]);
			}
			else if (arrComp[i] instanceof nexacro.Edit || arrComp[i] instanceof nexacro.MaskEdit || arrComp[i] instanceof nexacro.TextArea)
			{
				if(isData==true) {
					if(isSub==true) {
						arrComp[i].sub = isSub;
					}
					arrComp[i].addEventHandler("onkeydown", this._edt_common_keydown, this);
				}
				//this._gfnSetEditMsClear(arrComp[i]);
			}
			else if (arrComp[i] instanceof nexacro.Combo) {
				if (arrComp[i].type == "dropdown") {
					arrComp[i].set_type("caseifilterlike");
					arrComp[i].set_autoselect(true);
				}
			}
		}
	}
	
   	
// 	// 화면 loading 시간 측정
// 	if (objForm.parent.name == "divWork")
// 	{
// 		var objApp     = objForm.gfnGetApplication();
// 		var sStartDate = objApp.sStartDate;
// 		var nStartTime = objApp.nStartTime;
// 		
// 		var objDate  = new Date();
// 		var sEndDate = objDate.getYear()
// 						+"-"+String(objDate.getMonth()  ).padLeft(2, '0')
// 						+"-"+String(objDate.getDate()   ).padLeft(2, '0')
// 						+" "+String(objDate.getHours()  ).padLeft(2, '0')
// 						+":"+String(objDate.getMinutes()).padLeft(2, '0')
// 						+":"+String(objDate.getSeconds()).padLeft(2, '0')
// 						+" "+objDate.getMilliseconds();						
// 		var nElapseTime = (objDate.getTime() - nStartTime)/1000;
// 		//trace("gfnFormOnLoad : "+ sStartDate + " - " + nStartTime + " / " + sEndDate + " - " + nElapseTime);		
// 		
// 		objForm.parent.parent.staLodingTime.set_text("해당 화면의 loading 시간은 " +  + nElapseTime + " Sec 입니다.");
// 	}
	
	// 팝업 일때 처리
// 	if (!this.gfnIsNull(objForm.getOwnerFrame()))
// 	{
// 		if (objForm.getOwnerFrame().id.startsWith("DIALOG#"))
// 		{
// // 			// 키다운 이베트 추가
// // 			objForm.addEventHandler("onkeydown", this.gfnOnkeydown, this);
// 		}
// 	}

	// QuikView 일때 처리
	if (nexacro.getEnvironmentVariable("evQuikView") == "Y") 
	{
		if (this.gfnIsNull(objForm.opener) && objForm.parent instanceof nexacro.ChildFrame)
		{
			// 키다운 이베트 추가
			objForm.addEventHandler("onkeydown", this.gfnOnkeydown, this);
		}
	}
	
	// QuickView 파라미터 설정
	var quickViewParam = nexacro.getApplication().QuickViewParam;
	if (quickViewParam != undefined) {
		var QuickViewParam = {};
		var QuickViewParamKey = Object.keys(quickViewParam);
		for (var i = 0; i < QuickViewParamKey.length; i++) {
			if (QuickViewParamKey[i] == "CD_MODULE" || QuickViewParamKey[i] == "formname") {
				continue;
			}
			QuickViewParam[QuickViewParamKey[i]] = quickViewParam[QuickViewParamKey[i]];
		}
	}
	this.QuickViewParam = QuickViewParam;
};


pForm.gfnSetSearchCodeFind = function(divSearch) {
	var arrComp = divSearch.form.components;
	var nLength = arrComp.length;
	
	for (var i=0; i<nLength; i++)
	{
		if (arrComp[i] instanceof nexacro.Div)
		{
			if (this.gfnIsNull(arrComp[i].url)) {
				this.gfnSetSearchCodeFind(arrComp[i]);
			} else {
				var url = arrComp[i].url.toLowerCase();
				if(url.indexOf("codefind")>-1) {
					arrComp[i].IsSearch = true;
				}
			}
		}
	}
};

pForm._set_frame_btn = function(objForm, arrComp, tot, idx, isSearch) {
	var divBtns_height = 53;
	if(objForm.getOwnerFrame().type == "dialog" || this.gfnGetApplication().gdsUserInfo.rowcount == 0) {
		divBtns_height = 0;
	}
	var divBtns = new Div();
	divBtns.set_async(false);
	divBtns.set_url("frame::frameBtnNew.xfdl");
	
	if (objForm["frameQuickView"] != null) {
		if(objForm["frameQuickView"].height == 0) {
			divBtns.init( "divTopBtn", 0, "frameQuickView:0", null, divBtns_height, 0 );
		} else {
			if (objForm.parent.id == "QuickViewFrame") {
				if (isSearch) {
					divBtns.init( "divTopBtn", 0, "frameQuickView:13", null, divBtns_height, 0 );
				} else {
					divBtns.init( "divTopBtn", 0, "0", null, divBtns_height, 0 );
				}
			} else {
				divBtns.init( "divTopBtn", 0, "frameQuickView:5", null, divBtns_height, 0 );
			}
		}
		divBtns.isdirect = "true";
	} else {	
		if(!isSearch) {
			divBtns.init( "divTopBtn", 0, -8, null, divBtns_height, 0 );
		} else {
			divBtns.init( "divTopBtn", 0, "divSearch:2", null, divBtns_height, 0 );
		}
	}
	if(idx <= tot) {
		//arrComp[idx].set_top("divTopBtn:0");
		if(divBtns_height != 0) {
			if(!isSearch) {
				arrComp[idx].set_top(35);
			} else {
				arrComp[idx].set_top("divSearch:53");
			}
		}
	}
	
	if(objForm.getOwnerFrame().formurl == "frame::frameWorkPopup.xfdl") {
		divBtns.ispop = "true";
	}
	else if(objForm.getOwnerFrame().formurl == "frame::frameWorkDirect.xfdl") {
		divBtns.isdirect = "true";
	}
	
	objForm.insertChild(idx, "divTopBtn", divBtns);
	divBtns.show();
	objForm.resetScroll();
	objForm.divTopBtn = divBtns;
}


pForm._edt_common_keydown = function(obj, e) 
{	
	if (obj.readonly == true) return;
	if (e.ctrlkey == true || e.altkey == true || e.shiftkey == true
		|| (e.keycode >= 33 && e.keycode <= 40)  && (e.keycode >= 112 && e.keycode <= 123)
		//|| e.keycode == 8 
		|| e.keycode == 13 || e.keycode == 19 || e.keycode == 20 
		|| e.keycode == 21 || e.keycode == 25 || e.keycode == 27 || e.keycode == 45 || e.keycode == 46
		|| e.keycode == 91 || e.keycode == 92 || e.keycode == 93 || e.keycode == 144 || e.keycode == 145) {
	} else {
		var flag = this.gfnGetFormStatus(this);
		if(obj.sub == true) {
			flag = this.gfnGetFormSubStatus(this);
		}
		if(flag != "I" && flag != "D" && flag != "DU" && flag != "U" && flag != "#") {
			if(obj.sub == true) {
				this.gfnSetFormSubStatus(this, "U");
			} else {
				this.gfnSetFormStatus(this, "U");
			}
		}
	}
}

/**
 * @description 각 화면에서 단축키 지정
*/
pForm.gfnOnkeydown = function(obj, e)
{
	//trace("e.ctrlkey : " + e.ctrlkey + " / e.keycode : " + e.keycode);

	if (e.shiftkey == true && e.keycode == 123) { // shift + F12
		var objForm = this.gfnGetWorkForm(this.parent);
		// 폼버튼관리
		if(!this.gfnIsNull(objForm.FormInfo)) {
			var param = {};
			param.CD_MODULE = objForm.FormInfo.CD_MODULE;
			param.ID_FORM = objForm.FormInfo.ID_FORM;
			param.NM_FORM = objForm.FormInfo.NM_FORM;
			this.gfnFormOpen("DZB", "DZU_FORMBUTTON", "", param);
		}
		if (system.navigatorname != "nexacro") {
			event.preventDefault();
		}
	}		
	else if (e.ctrlkey == true && e.keycode == 123) { // ctrl + F12
		var objForm = this.gfnGetWorkForm(this.parent);
		// 개발정보
		if(!this.gfnIsNull(objForm.FormInfo)) {
			var param = {};
			param.ID_FORM = objForm.FormInfo.ID_FORM;
			param.GR_SEARCH = objForm.FormInfo.GR_SEARCH;
			param.TY_AUTH = objForm.FormInfo.TY_AUTH;
			this.gfnFormOpen("DZO", "DZU_FORMINFO", "", param);
		}
		if (system.navigatorname != "nexacro") {
			event.preventDefault();
		}
	}
	else if (e.keycode == 119) {	// F8 조회
		var objForm = this.gfnGetWorkForm(this.parent);
		if(!this.gfnIsNull(objForm.FormBtns)) {
			if(objForm.FormBtns.Select.enable == true) {
				// 코드파인드 입력후 커서가 있는 상태에서 코드파인드 조회가 되기전에 Select가 타기때문에 시간차를 둔다.
				objForm.FormBtns.Select.setFocus();
				this.gfnSetTimer(this, function() {
					objForm.FormBtns.Select.click();
				}, 100);
			}
		}
		if (system.navigatorname != "nexacro") {
			event.preventDefault();
		}
	}
	else if(e.keycode == 27) { 											 // esc 화면닫기 
		var objForm = this.gfnGetWorkForm(this.parent);
		if(!this.gfnIsNull(objForm.FormBtns)) {
			objForm.FormBtns.Close.click();
		}
		if (system.navigatorname != "nexacro") {
			event.preventDefault();
		}
	}
	else if(e.ctrlkey == true && e.shiftkey == true && e.keycode == 83) { // ctrl + shiftkey + s   저장 
		var objForm = this.gfnGetWorkForm(this.parent);
		if(!this.gfnIsNull(objForm.FormBtns)) {
			objForm.FormBtns.Save.click();
		}
		if (system.navigatorname != "nexacro") {
			event.preventDefault();
		}
	}
	
};

/**
 * @class left메뉴 클릭시 해당화면 호출함수 <br>
 * @param {Object} oObj 
 * @return N/A
 * @example 
 */
/*
pForm.gfnCall = function(oObj)
{	
	if(!this.gfnIsNull(oObj) && typeof(oObj) !=  "object") return;	
	
	var objApp  = pForm.gfnGetApplication();
	var gdsOpen = objApp.gdsOpenMenu;				//열린 	  dataset	
	var ds      = oObj.ds;							//넘어온 dataset
	var nRow    = oObj.nRow;						//선택된 현재 row
	var aArgs 	= this.gfnIsNull(oObj.oArg) ? "" : oObj.oArg ;   //넘어온 arguments
	
	var winid = gdsOpen.lookup(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.winId);

	if (!this.gfnIsNull(winid))
	{
		if (objApp.gvMdiFrame.form.isActiveFrame(winid, aArgs) == true)
		{
			objApp.gvMdiFrame.form.fnMoveTab(winid);
			return;
		}
	}
	
	//열린메뉴 체크( application.gvMax = 8)	
	if( objApp.gvMax <= gdsOpen.getRowCount() ){
		          
		alert(objApp.gvMax +"개 초과하여 화면을 열수 없습니다");
		return false;
	}
	
	this.gfnNewMdi(sMenuId, nRow, aArgs);
};
*/

pForm.gfnCallNew = function(oObj)
{	
	if(!this.gfnIsNull(oObj) && typeof(oObj) !=  "object") return;	
	
	var objApp  = pForm.gfnGetApplication();
	var gdsOpen = objApp.gdsOpenMenu;				//열린 	  dataset	
	var cd_module   = oObj.CD_MODULE;							//넘어온 dataset
	var id_form     = oObj.ID_FORM;						//선택된 현재 row
	var nm_form 	= oObj.NM_FORM;
	var id_win		= cd_module + "#" + id_form;
	
	if(objApp.gvFormLimit > 1) {
		var cnt = this.objApp.gvMdiFrame.form.isActiveFrameCount(id_win);
		if(cnt > 0) {
			id_win = id_win + "_" + (cnt+1);
		}
	}
	/*
	var winid = gdsOpen.lookup("ID_WIN", id_win, "ID_WIN");

	if (!this.gfnIsNull(winid))
	{
		if (objApp.gvMdiFrame.form.isActiveFrame(winid) == true)
		{
			objApp.gvMdiFrame.form.fnMoveTab(winid);
			return;
		}
	}
	
	//열린메뉴 체크( application.gvMax = 8)	
	if( objApp.gvMax <= gdsOpen.getRowCount() ){
		          
		alert(objApp.gvMax +"개 초과하여 화면을 열수 없습니다");
		return false;
	}
	*/
	
	this.gfnNewMdi(oObj, id_win);
};

pForm.gfnCallPopup = function(oObj, type)
{	
	if(!this.gfnIsNull(oObj) && typeof(oObj) !=  "object") return;	
	
	var objApp  = pForm.gfnGetApplication();
	var oForm = oObj.CUR_FORM;
	var wintype = "POP";
	var baseUrl = "frame::frameWorkPopup.xfdl";
	var pageSystem = oObj.ID_FORM.substr(0, 2).toLocaleLowerCase();	
	var pageModule = oObj.ID_FORM.substr(0, 3).toLocaleLowerCase();	
	var idForm = oObj.ID_FORM.toUpperCase();
	if(idForm.indexOf('$') > -1) {
		idForm = idForm.substring(0, idForm.indexOf('$'));
	}
	if(pageSystem == "dx") pageSystem = "dz";
	var pageUrl = pageSystem + "::" + pageModule + "/" +idForm + ".xfdl";
	if(type == "dialog") {
		wintype = "DIALOG";
		//baseUrl = pageUrl;
	}
	var winid = wintype + "#" + oObj.CD_MODULE + "#" + oObj.ID_FORM + "_" + (new Date()).toISOString();
	var oOption = { popuptype: "form", title: oObj.DS_FORM };
	if (oObj.POP_WIDTH > 0) {
		oOption.width = oObj.POP_WIDTH;
	}
	if (oObj.POP_HEIGHT > 0) {
		oOption.height = oObj.POP_HEIGHT;
	}
	var sPopupCallback = oObj.POP_CALLBACK;
	var oArg = oObj.POP_ARGS;
// 	if (type == "dialog") {
// 		baseUrl = "frameWork";
// 	}
	var newChild = this.gfnOpenPopup(winid, baseUrl,oArg,sPopupCallback,oOption);	
	
	newChild.arguments = [];
	newChild.arguments["ID_WIN"] = winid;
	newChild.arguments["CD_MODULE"] = oObj.CD_MODULE;
	newChild.arguments["ID_FORM"] = oObj.ID_FORM;
	newChild.arguments["NM_FORM"] = oObj.NM_FORM;
	newChild.arguments["ID_GROUP"] = oObj.ID_GROUP;
	newChild.arguments["GR_SEARCH"] = oObj.GR_SEARCH;
	newChild.arguments["TY_AUTH"] = oObj.TY_AUTH;
	newChild.arguments["DS_FORM"] = oObj.DS_FORM;
	newChild.arguments["CD_ROLE"] = oObj.CD_ROLE;
	newChild.arguments["DS_PARAM"] = oObj.DS_PARAM;
	newChild.arguments["DS_NOTICE"] = oObj.DS_NOTICE;
	newChild.arguments["DS_HELP"] = oObj.DS_HELP;
	newChild.arguments["pageUrl"] = pageUrl;
	newChild.arguments["Args"] = oObj.Args;
	newChild.arguments["BTN_INFO"] = oObj.BtnInfo;
	newChild.arguments["TY_MENU"] = type;
	
	
	if(this.gfnIsNull(sPopupCallback)) {
		newChild.showModal(oForm.getOwnerFrame(), oArg, oForm);
	} else {
		newChild.showModal(oForm.getOwnerFrame(), oArg, oForm, oForm[sPopupCallback]);
	}
};


/**
 * @class left메뉴 클릭시 해당화면 호출함수 <br>
 * @param {Object} oObj 
 * @return N/A
 * @example 
 */
pForm.gfnCallSDI = function(oObj)
{	
	if (!this.gfnIsNull(oObj) && typeof(oObj) !=  "object") return;	
	
	var objApp  = pForm.gfnGetApplication();
	var gdsOpen = objApp.gdsOpenMenu;							// 열린   Dataset	
	var ds      = oObj.ds;										// 넘어온 Dataset
	var nRow    = oObj.nRow;									// 선택된 현재 row
	var aArgs 	= this.gfnIsNull(oObj.oArg) ? "" : oObj.oArg ; 	// 넘어온 Arguments
	var sMenuId;
	
	if (!this.gfnIsNull(oObj.sMenuId))
		sMenuId = oObj.sMenuId;
	else
		sMenuId = ds.getColumn(nRow, "ID_WIN");
	
	if (system.navigatorname != "nexacro")
	{
		// History	
		var sHash 	= "menu:" + sMenuId;
		var oData	= {oArg : oObj.oArg};
		
		MyHistory.setLocationHash(sHash, oData);
	}
	
	this.gfnNewSdi(sMenuId, aArgs);
};

/**
 * @class gdsOpenMenu의 해당 Row의 정보를 기준으로 신규 윈도우 화면을 생성하고 open 시킴 <br>
 * @param {String} sMenuId - menuId
 * @param {Number} nRow - gdsOpenMenu의rowpostion
 * @param {Array} aArgs - arguments
 * @return N/A
 */
pForm.gfnNewMdi = function(oObj, winid)
{	
	var objApp   = pForm.gfnGetApplication();
	var gdsOpen  = objApp.gdsOpenMenu;		//열린 dataset
	//var gdsMenu  = objApp.gdsMenu;
	//var winid    = "win" + sMenuId + "_" + gdsOpen.getRowCount() + "_" + parseInt(Math.random() * 1000);		
	var pageSystem = oObj.ID_FORM.substr(0, 2).toLocaleLowerCase();	
	var pageModule = oObj.ID_FORM.substr(0, 3).toLocaleLowerCase();
	var idForm = oObj.ID_FORM.toUpperCase();
	if(idForm.indexOf('$') > -1) {
		idForm = idForm.substring(0, idForm.indexOf('$'));
	}
	if(pageSystem == "dx") pageSystem = "dz";
	var sPageUrl = pageSystem + "::" + pageModule + "/" +idForm + ".xfdl";
// 	if(oObj.TY_MENU == "Link") {
// 		sPageUrl = oObj.ID_FORM;
// 		if (sPageUrl.indexOf("{token}") > -1) {
// 			var id_user = objApp.gvUserInfo.ID_USER;
// 			var cd_dept = objApp.gvUserInfo.CD_DEPT;
// 			this._gfnCreateSSO(id_user);
// 			sPageUrl = sPageUrl.replace("{user}", id_user).replace("{token}", this._SSO_DS_KEY).replace("{cd_dept}", cd_dept);
// 			if(sPageUrl.indexOf("url=") > -1) {
// 				var tmp1 = sPageUrl.substring(0, sPageUrl.indexOf("url=")+4);
// 				var pUrl = sPageUrl.substring(sPageUrl.indexOf("url=")+4);
// 				sPageUrl = tmp1 + encodeURIComponent(pUrl);
// 			}
// 			trace(sPageUrl);
// 		}
// 	}

	//var sGroupId = ""; //gdsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.groupId);

// 	// 화면 loading 시간 측정
// 	var objDate = new Date();
// 	var nStartTime = objDate.getTime();
//     var sStartDate = objDate.getYear()
// 						+"-"+String(objDate.getMonth()).padLeft(2, '0')
// 						+"-"+String(objDate.getDate()).padLeft(2, '0')
// 						+" "+String(objDate.getHours()).padLeft(2, '0')
// 						+":"+String(objDate.getMinutes()).padLeft(2, '0')
// 						+":"+String(objDate.getSeconds()).padLeft(2, '0')
// 						+" "+objDate.getMilliseconds();
// 	objApp.nStartTime = nStartTime;
// 	objApp.sStartDate = sStartDate;

	//var sColumn  = objApp.gvMenuColumns.menuNm;
	//var sMenuNm  = gdsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, sColumn);
	
	if(this.gfnIsNull(sPageUrl)) return;		//pageURl 이 없으면 return
	this.gfnSetOpenMenuDs(winid, oObj.CD_MODULE, oObj.ID_FORM, oObj.NM_FORM, sPageUrl);	// 열린메뉴 화면 삽입

	var objNewWin = new ChildFrame;
	objNewWin.init(winid, 0, 0, objApp.gvWorkFrame.getOffsetWidth() - 0, objApp.gvWorkFrame.getOffsetHeight() - 0);
	objApp.gvWorkFrame.addChild(winid, objNewWin);

	//objNewWin.set_tooltiptext(winid);
	objNewWin.arguments = [];
	objNewWin.set_dragmovetype("all");
	objNewWin.set_showtitlebar(false);
	objNewWin.set_resizable(true);
	objNewWin.set_openstatus("maximize");
	objNewWin.set_titletext(oObj.NM_FORM);
	objNewWin.set_showcascadetitletext(false);
	objNewWin.arguments["ID_WIN"] = winid;
	objNewWin.arguments["CD_MODULE"] = oObj.CD_MODULE;
	objNewWin.arguments["ID_FORM"] = oObj.ID_FORM;
	objNewWin.arguments["NM_FORM"] = oObj.NM_FORM;
	objNewWin.arguments["ID_GROUP"] = oObj.ID_GROUP;
	objNewWin.arguments["GR_SEARCH"] = oObj.GR_SEARCH;
	objNewWin.arguments["TY_AUTH"] = oObj.TY_AUTH;
	objNewWin.arguments["DS_FORM"] = oObj.DS_FORM;
	objNewWin.arguments["CD_ROLE"] = oObj.CD_ROLE;
	objNewWin.arguments["DS_PARAM"] = oObj.DS_PARAM;
	objNewWin.arguments["DS_NOTICE"] = oObj.DS_NOTICE;
	objNewWin.arguments["DS_HELP"] = oObj.DS_HELP;
	objNewWin.arguments["pageUrl"] = sPageUrl;
	objNewWin.arguments["Args"] = oObj.Args;
	objNewWin.arguments["BTN_INFO"] = oObj.BtnInfo;
// 	if (oObj.TY_MENU == "Link") {
// 		objNewWin.arguments["TY_MENU"] = "link";
// 		objNewWin.set_formurl("frame::frameLink.xfdl");
// 	} else {
		objNewWin.arguments["TY_MENU"] = "form";
		objNewWin.set_formurl("frame::frameWork.xfdl");
//	}

	objApp.gvMdiFrame.form.fnAddTab(winid, oObj.NM_FORM);   //mdi tab button add	
	objApp.gvMdiFrame.form.isActiveFrame(winid);
	
	objNewWin.show();	
};

pForm._gfnCreateSSO = function(id_user) {
	
	this._SSO_DS_KEY = "";
	
	this._dsProcSSO = new Dataset();
	this._dsProcSSO.addColumn("TARGET", "string");
	this._dsProcSSO.addColumn("SP", "string");
	this._dsProcSSO.addRow();
	this._dsProcSSO.setColumn(0, "TARGET", "save");
	this._dsProcSSO.setColumn(0, "SP", "DZZPR_SSOUSERID_INSERT");
	
	this.dsOutputSSO = new Dataset();
	
	this.dsSelectSSO = new Dataset();
	this.dsSelectSSO.addColumn("ID_USER", "string");
	this.dsSelectSSO.addColumn("DS_KEY", "string");
	
	this.dsSelectSSO.addRow();
	this.dsSelectSSO.setColumn(0, "ID_USER", id_user);
	this.dsSelectSSO.setColumn(0, "DS_KEY", "");

	var strSvcId    = "sso";
	var strSvcType  = "save";
	var inProc		= "_dsProcSSO";
	var inData      = "save=dsSelectSSO";
	var outData     = "dsOutputSSO=save";
	var strArg      = "";
	var callBackFnc = "_gfnCallbackSSO";
	
	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
						strSvcType , 	// trabsaction을 요청할 구분
						inProc,			// Procedure 정보 Dataset 이름
						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
						callBackFnc, false); // 통신방법 정의 [생략가능]
};

pForm._gfnCallbackSSO = function(svcID, errorCode, errorMsg) {
	if(svcID == "sso") {
		if(this.dsOutputSSO.rowcount > 0) {
			this._SSO_DS_KEY = this.dsOutputSSO.getColumn(0, "DS_KEY");
		}
	}
};

/**
 * @class gdsOpenMenu의 해당 Row의 정보를 기준으로 신규 윈도우 화면을 생성하고 open 시킴 <br>
 * @param {String} sMenuId - menuId
 * @param {Number} nRow - gdsOpenMenu의rowpostion
 * @param {Array} aArgs - arguments
 * @return N/A
 */
pForm.gfnNewSdi = function(oObj, winid)
{
	var objApp   = pForm.gfnGetApplication();
	var gdsOpen  = objApp.gdsOpenMenu;		//열린 dataset
	//var gdsMenu  = objApp.gdsMenu;	
	var pageSystem = oObj.ID_FORM.substr(0, 2).toLocaleLowerCase();
	var pageModule = oObj.ID_FORM.substr(0, 3).toLocaleLowerCase();
	var idForm = oObj.ID_FORM.toUpperCase();
	if(idForm.indexOf('$') > -1) {
		idForm = idForm.substring(0, idForm.indexOf('$'));
	}
	if(pageSystem == "dx") pageSystem = "dz";
	var sPageUrl = pageSystem + "::" + pageModule + "/" +idForm + ".xfdl";
	//var sGroupId = gdsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.groupId);

// 	// 화면 loading 시간 측정
// 	var objDate = new Date();
// 	var nStartTime = objDate.getTime();
//     var sStartDate = objDate.getYear()
// 						+"-"+String(objDate.getMonth()	).padLeft(2, '0')
// 						+"-"+String(objDate.getDate()	).padLeft(2, '0')
// 						+" "+String(objDate.getHours()  ).padLeft(2, '0')
// 						+":"+String(objDate.getMinutes()).padLeft(2, '0')
// 						+":"+String(objDate.getSeconds()).padLeft(2, '0')
// 						+" "+objDate.getMilliseconds();
// 	objApp.nStartTime = nStartTime;
// 	objApp.sStartDate = sStartDate;
	
	//var sColumn  = objApp.gvMenuColumns.menuNm;
	//var sMenuNm  = gdsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, sColumn);
	
	var objNewWin = objApp.gvWorkFrame;
		objNewWin.set_url("");
		
	// Div Arguments Setting
 	objNewWin.arguments = [];
	objNewWin.arguments["ID_WIN"] = winid;
	objNewWin.arguments["ID_FORM"] = oObj.ID_FORM;
	objNewWin.arguments["NM_FORM"] = oObj.NM_FORM;
	objNewWin.arguments["pageUrl"] = sPageUrl;
	objNewWin.arguments["Args"] = oObj.Args;
	
	objNewWin.set_url("frameSDI::frameWork.xfdl");	
};

/**
 * @class 열린화면 데이터셋에 추가 <br>
 * @param {String} winid
 * @param {String} menuId
 * @param {String} strTitle
 * @param {String} spageUrl
 * @param {String} sGroupId
 * @return N/A
 */
pForm.gfnSetOpenMenuDs = function(winid, cd_module, id_form, nm_form, spageUrl)
{
	var objApp  = pForm.gfnGetApplication();
	var gdsOpen = objApp.gdsOpenMenu ;  //열린 dataset
	var nRow = gdsOpen.addRow();
	gdsOpen.setColumn(nRow, "ID_WIN", winid);
	gdsOpen.setColumn(nRow, "CD_MODULE", cd_module);
	gdsOpen.setColumn(nRow, "ID_FORM", id_form);	
	gdsOpen.setColumn(nRow, "NM_FORM", nm_form);
	gdsOpen.setColumn(nRow, "DS_URL", spageUrl);
};

/**
 * @class 해당화면 데이터셋에 추가 <br>
 * @param {String} 	sName : winKey, menuId, menuNm, pageUrl, aArgs
 * @return String
 */
pForm.gfnGetArgument = function(sName)
{
	return this.getOwnerFrame().arguments[sName];
};

/**
 * @class 서버 URL <br>
 * @param {String} 	sName : winKey, menuId, menuNm, pageUrl, aArgs
 * @return String
 */
pForm.gfnGetServerUrl = function()
{
	var urlPath = "";
    if (system.navigatorname == "nexacro") 
	{
	    var objEnv = nexacro.getEnvironment();
		urlPath = objEnv.services["svcUrl"].url;
	}else{
		urlPath = window.location.protocol + "//" + window.location.host;
		urlPath;
	}
	//trace("urlPath : " + urlPath);
	return urlPath;
};

/**
 * @class 현재 실행된 어플리케이션의 Application 오브젝트를 반환하는 메소드 <br>
 * @param  none
 * @return Object
 */
pForm.gfnGetApplication = function()
{
	// nexacro 14/17 구분하여 Application object를 사용한다.
	var objApp = (sysver == "nexacro17" ? nexacro.getApplication() : application);
	
	return objApp;
};

pForm.gfnFormInfo = function(objForm, parentForm)
{	
	var objApp = pForm.gfnGetApplication();
	
	if(objForm.parent instanceof nexacro.Tabpage) {
		// 처음 로딩되는 tab의 경우
		if(objForm.parent.parent.tabindex == -1) {
			if(parentForm._arrLoadForms == null) {
				parentForm._arrLoadForms = [];
			}
			
			var ispush = true;
			for(var f = 0; f < parentForm._arrLoadForms.length; f++) {
				if(objForm._unique_id == parentForm._arrLoadForms[f]._unique_id) {
					ispush = false;
				}
			}
			if(ispush) {
				parentForm._arrLoadForms.push(objForm);
			}
			return false;
		}
	}
	
	var auth = this.gfnGetFormArguments(objForm); //objForm.getOwnerFrame().arguments;
	
	var btns;
	if(parentForm != null) {
		objForm._PARENT_FORM = parentForm;
		btns = parentForm.divTopBtn.form;
	} else {
		if(auth["TY_MENU"] == "dialog") {
			if(objForm.maxwidth != null && objForm.maxheight != null) {
				var width = objForm.maxwidth;
				var height = objForm.maxheight;
				var left =  (objApp.mainframe.width / 2) - Math.round(width / 2);
				var top = (objApp.mainframe.height / 2) - Math.round(height / 2) ;	
				var popup = objForm.getOwnerFrame();
				popup.set_width(width);
				popup.set_height(height);
				popup.set_left(left);
				popup.set_top(top);			
			}
		}
		
		if(objForm._arrLoadForms != null) {
			for(var f = 0; f < objForm._arrLoadForms.length; f++) {
				objForm._arrLoadForms[f].form_onload(objForm._arrLoadForms[f]);
			}
		}
		
		btns = objForm.divTopBtn.form;
	}
	
	objForm.FormBtns = {
		Select: "",
		Add: "",
		Del: "",
		Save: "",
		Excel: "",
		Print: "",
		Reset: "",
		Close: "",
		SubSelect: "",
		SubAdd: "",
		SubDel: "",
		SubSave: "",
		SubExcel: "",
		SubReset: "",
		Split: ""
	};
	objForm.FormInfo = {
		ID_WIN: "",
		CD_MODULE: "",
		ID_GROUP: "",
		GR_SEARCH: "",
		TY_AUTH: "",
		ID_FORM: "",
		NM_FORM: "",
		DS_FORM: "",
		CD_ROLE: "",
		DS_PARAM: "",
		DS_NOTICE: "",
		DS_HELP: ""
	};
	objForm.BtnsInfo = {};
	objForm.AuthClient = objApp.gvUserInfo;
	objForm.UserInfo = objApp.gvUserConfig;
	
	objForm.FormBtns.Select = btns.btnSel;
	objForm.FormBtns.Add = btns.btnAdd;
	objForm.FormBtns.Del = btns.btnDel;
	objForm.FormBtns.Save = btns.btnSav;
	objForm.FormBtns.Excel = btns.btnExl;
	objForm.FormBtns.Print = btns.btnPrt;
	objForm.FormBtns.Reset = btns.btnRes;
	objForm.FormBtns.Close = btns.btnCls;
	
	objForm.FormBtns.Split = btns.splBtn;
	
	objForm.FormBtns.SubSelect = btns.btnSelSub;
	objForm.FormBtns.SubAdd = btns.btnAddSub;
	objForm.FormBtns.SubDel = btns.btnDelSub;
	objForm.FormBtns.SubSave = btns.btnSavSub;
	objForm.FormBtns.SubExcel = btns.btnExlSub;
	objForm.FormBtns.SubReset = btns.btnResSub;
	
	objForm.FormInfo.ID_WIN = auth["ID_WIN"];
	objForm.FormInfo.CD_MODULE = auth["CD_MODULE"];
	objForm.FormInfo.ID_GROUP = auth["ID_GROUP"];
	objForm.FormInfo.GR_SEARCH = auth["GR_SEARCH"];
	objForm.FormInfo.TY_AUTH = auth["TY_AUTH"];
	objForm.FormInfo.ID_FORM = auth["ID_FORM"];
	objForm.FormInfo.NM_FORM = auth["NM_FORM"];
	objForm.FormInfo.DS_FORM = auth["DS_FORM"];
	objForm.FormInfo.CD_ROLE = auth["CD_ROLE"];
	objForm.FormInfo.DS_PARAM = auth["DS_PARAM"];
	objForm.FormInfo.DS_NOTICE = auth["DS_NOTICE"];
	objForm.FormInfo.DS_HELP = auth["DS_HELP"];
		
	// 확장 버튼 설정
	objForm.BtnsInfo = auth["BTN_INFO"];
		
	if(parentForm == null) {
		if(btns.parent._is_loadedform) {
			var ty_auth = auth["TY_AUTH"]; //.form.divWork.form.objInfo;
			btns.fnSetAuthBtn(ty_auth); //, objApp.gvWorkFrame.frames[auth["ID_WIN"]]);
		}
		
		if(!this.gfnIsNull(objForm.FormInfo.DS_NOTICE)) {
			this.gfnAlert("notice.msg", [objForm.FormInfo.DS_NOTICE]);
		}
	}
	
	return true;
};

pForm.gfnFormButtonAdd = function(btnID, btnFunc, btnText, btnPos) {
	if (btnID == "|") {
		var btnForm = this.divTopBtn.form;
		
		var sn_order = 0;
		if(btnForm.fvObjArray.length > 0) {
			sn_order = btnForm.fvObjArray[btnForm.fvObjArray.length-1].ord + 0.5;
		}
		
		var staPart = new nexacro.Static();
		var staPartID = "staPart"+sn_order;
		staPart.init(staPartID, null, 20, 1, 27, 15);
		staPart.set_background("#999899");
		btnForm.addChild(staPartID, staPart);
		staPart.show();
		
		btnForm.fvObjArray.push({id: staPartID, ord: sn_order, pos: "", grp: "" });	
		return;
	}

	var isManual = false;
	var isMake = false;
	if (btnText != null) {
		isManual = true;
		isMake = true;
	}

	if(!isManual && (this.gfnIsNull(this.BtnsInfo) || this.BtnsInfo.length == 0)) {
		trace("확장버튼: " + btnID + " 정보가 없습니다.");
		return new Button();
	}
	
	var objApp = this.gfnGetApplication();
	
	var isBtn = false;
	var btnInfo;
	if(!isManual) {
		for(var i = 0; i < this.BtnsInfo.length; i++) {
			var json = this.BtnsInfo[i];
			if (btnID == json.ID_BUTTON) {
				btnInfo = json;
				isBtn = true;
				break;
			}
		}
	}
	
	var newBtnID = "btnExt_" + btnID;
	var btnEnabled = true;
	var btnType = "";
	var btnColumn = "";
	var btnGroup = "";
	var btnColor = "";
	if(isBtn == true) {	
//		if(btnInfo.YN_VISIBLE == "Y") {
			isMake = true;
			btnText = btnInfo.DS_BUTTON;
			btnType = btnInfo.TY_BUTTON;
			btnColumn = btnInfo.NM_COLUMN;
			btnGroup = btnInfo.NM_GROUP;
			btnColor = btnInfo.DS_COLOR;
			if(btnInfo.YN_ENABLED=="Y" && btnInfo.YN_QUERYX == "Y") {
				btnEnabled = true;
			} else {
				btnEnabled = false;
			}
			
// 		} else {
// 			return;
// 		}
	} 
	
	if(isMake == true) {
		var btnForm = this.divTopBtn.form;
		var btnArray = btnForm.fvObjArray;
		var sn_order = 0;
		if(isManual == true) {
			sn_order = btnArray.length;
		} else {
			sn_order = btnInfo.SN_ORDER;
			btnPos = btnInfo.LR_BUTTON;
		}
		if(this.gfnIsNull(sn_order)) {
			sn_order = 0;
		}
		if(this.gfnIsNull(btnPos)) {
			btnPos = "R";
		}
		
		var objGroup;
		if(!this.gfnIsNull(btnGroup)) {
			var newBtnGroupID = "btnGroup_"+btnGroup;
			var divGroupID = "divGroup_"+btnGroup;
			var isAddGroup = false;
			for(var g = 0; g < btnArray.length; g++) {
				if(btnArray[g].grp == btnGroup) {
					isAddGroup = true;
					objGroup = this[divGroupID];
					break;
				}
			}
			if(!isAddGroup) {
				btnArray.push({id: newBtnGroupID, ord: sn_order, pos: btnPos, grp:btnGroup });	
				
				var objBtnGroup = new Button();
				objBtnGroup.init(newBtnGroupID, null, 20, 80, 27, 15);
				objBtnGroup.set_text(btnGroup);
				objBtnGroup.set_fittocontents("width");
				objBtnGroup.set_enable(true);
				objBtnGroup.set_cssclass("btn_WF_action");
				objBtnGroup.divGroupID = divGroupID;
				objBtnGroup.addEventHandler("onclick", function(obj,e) {
					var divGroupID = obj.divGroupID;
					if(this[divGroupID] != null) {
						var divGroup = this[divGroupID];
						var btnArray = divGroup.btnArray;
						var btnMaxWidth = 80;
						for(var i = 0; i < btnArray.length; i++) {
							if(divGroup.form[btnArray[i]] != null) {
								var btn = divGroup.form[btnArray[i]];
								if(btnMaxWidth < btn.getOffsetWidth()) {
									btnMaxWidth = btn.getOffsetWidth();
								}
							}
						}
						for(var i = 0; i < btnArray.length; i++) {
							if(divGroup.form[btnArray[i]] != null) {
								var btn = divGroup.form[btnArray[i]];
								btn.set_fittocontents("none");
								btn.setOffsetWidth(btnMaxWidth);
							}
						}
						divGroup.form.resetScroll();
						
						divGroup.setOffsetWidth(btnMaxWidth+30);
						divGroup.setOffsetHeight(Number(divGroup.btnCount)*30);
						divGroup.trackPopupByComponent(obj, -15, Number(obj.getOffsetHeight())+5);
					}
				}, this);	
				btnForm.addChild(newBtnGroupID, objBtnGroup);	
				if(btnInfo.YN_VISIBLE == "Y") {
				    objBtnGroup.show();
				} else {
					objBtnGroup.set_visible(false);
				}
				
				objGroup = new PopupDiv();
				objGroup.init(divGroupID, 0, 0, 200, 0);
				objGroup.btnCount = 0;
				objGroup.btnArray = [];
				this.addChild(divGroupID, objGroup);
				objGroup.show();
			}
		}
		else {
			btnArray.push({id: newBtnID, ord: sn_order, pos: btnPos, grp:'' });			
		}
		function customSort(a, b) { if(a.ord == b.ord){ return 0} return a.ord > b.ord ? 1 : -1; }
		btnArray.sort(customSort);
		
		var objBtn = new Button();
		objBtn.init(newBtnID, null, 20, 40, 27, 15);
		objBtn.set_text(btnText);
		//objBtn.set_padding("4px 7px 4px 7px");
		objBtn.set_fittocontents("width");
		objBtn.set_enable(btnEnabled);
		if(btnType == "EXEC") {
			objBtn.set_cssclass("btn_WF_function");
		} else {
			objBtn.set_cssclass("btn_WF_default");
		}
		if(!this.gfnIsNull(btnColor)) {
			objBtn.ds_color = btnColor;
			if(btnEnabled) {
				objBtn.set_background(btnColor);
				objBtn.set_border("1px solid " + btnColor);
			}
			
			this["_fnUserButton_onmouseenter"] = function(obj, e) {
				var back = obj.background;
				var color = obj.color;
				obj.set_background(color);
				obj.set_color(back);
				obj.set_border("1px solid " + back);
			};
			this["_fnUserButton_onmouseleave"] = function(obj, e) {
				var back = obj.background;
				var color = obj.color;
				obj.set_background(color);
				obj.set_color(back);
				obj.set_border("1px solid " + color);
			};
			objBtn.addEventHandlerLookup("onmouseenter", "_fnUserButton_onmouseenter", this);
			objBtn.addEventHandlerLookup("onmouseleave", "_fnUserButton_onmouseleave", this);
		}
		
		if(btnEnabled == false) {
			objBtn.forceEnabled = false;
		}
		if (isManual == true || btnInfo.YN_VISIBLE == "Y"){			
			if(!this.gfnIsNull(btnGroup)) {
				this[btnFunc+"_Group"] = function(obj,e) {
					obj.parent.parent.closePopup();
					if(this[btnFunc] != null) {
						this[btnFunc].call(this, obj, e);
					}
				};
				objBtn.addEventHandlerLookup("onclick", btnFunc+"_Group", this);	
			} else {
				var evt = objBtn.addEventHandlerLookup("onclick", btnFunc, this);
				
 				if(evt == -1) {
 					this[btnFunc] = function(obj,e) {
 						if(this[btnFunc] != null) {
 							this[btnFunc].call(this, obj, e);
 						}
 					}
 					objBtn.addEventHandlerLookup("onclick", btnFunc, this);
 				}
			}
		} else {
			objBtn.set_visible(false);
		}
		objBtn.NM_COLUMN = btnColumn;
		objBtn.IS_ENABLED = btnEnabled;
		
		if(btnForm[newBtnID] != null) btnForm.removeChild(newBtnID);
		
		if(!this.gfnIsNull(btnGroup)) {
			objGroup.addChild(newBtnID, objBtn);
			objGroup.btnArray.push(newBtnID);
			objBtn.set_top(Number(objGroup.btnCount)*30);
			objGroup.btnCount = objGroup.btnCount+1;
		} else {
			btnForm.addChild(newBtnID, objBtn);
			//btnForm.insertChild(0, newBtnID, objBtn);
		}
		objBtn.show();

		if(isBtn == true) {	
			btnInfo.COMP_BUTTON = objBtn;
		}
		
		btnForm.fnSetBtn();
		return objBtn;
	} else {
		trace("확장버튼: " + btnID + " 정보가 없습니다.");
		return new Button();
	}
};
/*
pForm.gfnFormButtonAdd = function(btnID, btnText, btnFunc) {
	var objApp = this.gfnGetApplication();
	var btnForm = this.parent.parent.divTitle.form; //objApp.gvWorkFrame.getActiveFrame().form.divTitle.form;
	var btnArray = btnForm.fvObjArray;
	btnArray.push(btnID);
	
	var objBtn = new Button();
	objBtn.init(btnID, null, 20, 45, 23, 15);
	objBtn.set_text(btnText);
	objBtn.set_padding("4px 7px 4px 7px");
	objBtn.set_fittocontents("width");
	objBtn.addEventHandlerLookup("onclick", btnFunc, this);
	
	if(btnForm[btnID] != null) btnForm.removeChild(btnID);
	btnForm.addChild(btnID, objBtn);
	objBtn.show();
	btnForm.fnSetBtn();
	return objBtn;
};
*/

pForm.gfnUseSubBtn = function(use, syncForm, divSplitter, customDragMoveEvent) {
	var objApp = this.gfnGetApplication();	
	var btnForm = this.divTopBtn.form;
	if (syncForm != null) {
		btnForm.splBtn.set_left(divSplitter.left);
		btnForm.splBtn.parent.parent.form.resetScroll();
		syncForm.setEventHandler("ondragmove", function(obj, e) {
			if(e.userdata == "splitter") {
				divSplitter.set_left(e.clientx);
				syncForm.form.resetScroll();
				btnForm.splBtn.set_left(e.clientx+Number(btnForm.splBtn.width));
				btnForm.splBtn.parent.parent.form.resetScroll();
				
				if(!this.gfnIsNull(customDragMoveEvent)) {
					var func = this.lookupFunc(customDragMoveEvent);
					if (func != null) {
						func.call(obj, e);
					}
				}
			}
		}, this);
		divSplitter.setEventHandler("ondrag", function(obj, e){
			e.set_userdata("splitter");
			return true;
		});
	}

	btnForm.fnSetVisibleSub(use);
};

/*
 *	화면(Form) Status 설정
 *	초기: ""
 *	조회: Q
 *	0건 : X
 *	입력: I
 *	수정: U
 *	삭제: D
 */
pForm.gfnSetFormStatus = function(objForm, status) {
	var oForm;
	if(objForm._PARENT_FORM != null) {
		oForm = objForm._PARENT_FORM;
	} else {
		oForm= objForm;
	}
	
	if (status == null) status = "";
	if (oForm._FORM_STATUS == null) oForm._FORM_STATUS = "";
	if (oForm._FORM_STATUS != status) {
		oForm._FORM_STATUS = status;
		
		this.gfnCallAuthBtn(oForm);
	}
};
pForm.gfnSetFormSubStatus = function(objForm, status, isSetBtns) {
	var oForm;
	if(objForm._PARENT_FORM != null) {
		oForm = objForm._PARENT_FORM;
	} else {
		oForm= objForm;
	}
	
	if (status == null) status = "";
	if (isSetBtns == null) isSetBtns = true;
	oForm._FORM_SUB_STATUS = status;
	
	if (isSetBtns) {
		this.gfnCallAuthBtn(oForm);
	}
};
pForm.gfnGetFormStatus = function(oForm) {
	if (oForm._FORM_STATUS == null) oForm._FORM_STATUS = "";
	return oForm._FORM_STATUS;
}
pForm.gfnGetFormSubStatus = function(oForm) {
	if (oForm._FORM_SUB_STATUS == null) oForm._FORM_SUB_STATUS = "";
	return oForm._FORM_SUB_STATUS;
}

/*
 *	폼 저장 가능 상태
 */ 
pForm.gfnGetFormStatusSave = function(oForm) {
	var form_status = oForm._FORM_STATUS;
	if(form_status == "I" || form_status == "U" || form_status == "D") {
		return true;
	} else {
		return false;
	}
}
pForm.gfnGetFormSubStatusSave = function(oForm) {
	var form_status = oForm._FORM_SUB_STATUS;
	if(form_status == "I" || form_status == "U" || form_status == "D") {
		return true;
	} else {
		return false;
	}
}

pForm.gfnCallAuthBtn = function(oForm) {
	var objApp  = pForm.gfnGetApplication();
	var btns = oForm.divTopBtn.form;
	btns.fnSetAuthBtnForm(oForm.FormInfo.TY_AUTH, oForm);
};

pForm.gfnIsCloseFormStatus = function(oForm) {
	if (this.gfnIsNull(oForm._FORM_STATUS) || oForm._FORM_STATUS == "Q" || oForm._FORM_STATUS == "X") {
		return true;
	} else {
		return false;
	}
};

pForm.gfnSetFormButton = function(sAuth, oForm, btnForm, active) {
	
	var isCommonSet = false;
	
	// 공통 버튼 처리
	switch(oForm._FORM_STATUS) {
		case "Q":
			this.gfnSetEnable(btnForm.btnAdd, true);
			this.gfnSetEnable(btnForm.btnDel, true);
			this.gfnSetEnable(btnForm.btnExl, true);
			//this.gfnSetEnable(btnForm.btnPrt, true);
 			break;
		case "X":
			this.gfnSetEnable(btnForm.btnAdd, true);
			this.gfnSetEnable(btnForm.btnDel, true);
			break;
		case "I":
		case "U":
		case "D":
			this.gfnSetEnable(btnForm.btnAdd, true);
			this.gfnSetEnable(btnForm.btnDel, true);
			this.gfnSetEnable(btnForm.btnSav, true);
			break;
		default:
			break;
	}
	
	// 공통 서브 버튼 처리
	switch(oForm._FORM_SUB_STATUS) {
		case "Q":
			this.gfnSetEnable(btnForm.btnAddSub, true);
			this.gfnSetEnable(btnForm.btnDelSub, true);
			this.gfnSetEnable(btnForm.btnExlSub, true);
			break;
		case "X":
			this.gfnSetEnable(btnForm.btnAddSub, true);
			this.gfnSetEnable(btnForm.btnDelSub, true);
			break;
		case "I":
		case "U":
		case "D":
			this.gfnSetEnable(btnForm.btnAddSub, true);
			this.gfnSetEnable(btnForm.btnDelSub, true);
			this.gfnSetEnable(btnForm.btnSavSub, true);
			break;
		default:
			break;
	}
	
	// TY_AUTH 기본 동작
	//if(sAuth == "U" || sAuth == "R") {
	if(sAuth == "R") {
		this.gfnSetEnable(btnForm.btnAdd, false);
		this.gfnSetEnable(btnForm.btnDel, false);
		
		this.gfnSetEnable(btnForm.btnAddSub, false);
		this.gfnSetEnable(btnForm.btnDelSub, false);
		
		if(btnForm.btnAdd.visible == true) {
			isCommonSet = true;
			btnForm.btnAdd.set_visible(false);
			btnForm.btnAddSub.set_visible(false);
		}
		if(btnForm.btnDel.visible == true) {
			isCommonSet = true;
			btnForm.btnDel.set_visible(false);			
			btnForm.btnDelSub.set_visible(false);
		}
	}
	
	if(sAuth == "R") {
		this.gfnSetEnable(btnForm.btnSav, false);
		this.gfnSetEnable(btnForm.btnSavSub, false);
		
		if(btnForm.btnSav.visible == true) {
			isCommonSet = true;
			btnForm.btnSav.set_visible(false);
			btnForm.btnSavSub.set_visible(false);
		}
	}	

	// 버튼관리 처리
	var btnsInfo = oForm.BtnsInfo;
	
	if(!this.gfnIsNull(btnsInfo)) {
		for(var i = 0; i < btnsInfo.length; i++){ 
			if(btnsInfo[i].TY_BUTTON == "COMMON") {
				// 공통버튼
				var id_button = btnsInfo[i].ID_BUTTON;
				switch(id_button) {
					case "INSERT":
						if(btnForm.btnAdd.visible == false && btnsInfo[i].YN_VISIBLE == "Y") {
							btnForm.btnAdd.set_visible(true);
							isCommonSet = true;
						} else if(btnForm.btnAdd.visible == true && btnsInfo[i].YN_VISIBLE == "N") {
							btnForm.btnAdd.set_visible(false);
							isCommonSet = true;
						}
						
						if(btnsInfo[i].YN_ENABLED == "Y" && !this.gfnIsNull(oForm._FORM_STATUS)) {
							this.gfnSetEnable(btnForm.btnAdd, true);
						} else {
							this.gfnSetEnable(btnForm.btnAdd, false);
						}
					
						break;
					case "SAVE":						
						if(btnForm.btnSav.visible == false && btnsInfo[i].YN_VISIBLE == "Y") {
							btnForm.btnSav.set_visible(true);
							isCommonSet = true;
						} else if(btnForm.btnSav.visible == true && btnsInfo[i].YN_VISIBLE == "N") {
							btnForm.btnSav.set_visible(false);
							isCommonSet = true;
						}
						
						if(btnsInfo[i].YN_ENABLED == "Y" && (
							oForm._FORM_STATUS == "I" || oForm._FORM_STATUS == "U" || oForm._FORM_STATUS == "D"
						)) {
							this.gfnSetEnable(btnForm.btnSav, true);
						} else {
							this.gfnSetEnable(btnForm.btnSav, false);
						}
					
						break;
					case "DELETE":
						if(btnForm.btnDel.visible == false && btnsInfo[i].YN_VISIBLE == "Y") {
							btnForm.btnDel.set_visible(true);
							isCommonSet = true;
						} else if(btnForm.btnDel.visible == true && btnsInfo[i].YN_VISIBLE == "N") {
							btnForm.btnDel.set_visible(false);
							isCommonSet = true;
						}
						
						if(btnsInfo[i].YN_ENABLED == "Y" && !this.gfnIsNull(oForm._FORM_STATUS)) {
							this.gfnSetEnable(btnForm.btnDel, true);
						} else {
							this.gfnSetEnable(btnForm.btnDel, false);
						}
						
						break;
						
					case "PRINT":
						if(btnForm.btnPrt.visible == false && btnsInfo[i].YN_VISIBLE == "Y") {
							btnForm.btnPrt.set_visible(true);
							isCommonSet = true;
						} else if(btnForm.btnPrt.visible == true && btnsInfo[i].YN_VISIBLE == "N") {
							btnForm.btnPrt.set_visible(false);
							isCommonSet = true;
						}
						
						if(btnsInfo[i].YN_ENABLED == "Y" && !this.gfnIsNull(oForm._FORM_STATUS)) {
							this.gfnSetEnable(btnForm.btnPrt, true);
						} else {
							this.gfnSetEnable(btnForm.btnPrt, false);
						}						
						break;
						
					case "INSERT_SUB":
						if(btnForm.btnAddSub.visible == false && btnsInfo[i].YN_VISIBLE == "Y") {
							btnForm.btnAddSub.set_visible(true);
							isCommonSet = true;
						} else if(btnForm.btnAddSub.visible == true && btnsInfo[i].YN_VISIBLE == "N") {
							btnForm.btnAddSub.set_visible(false);
							isCommonSet = true;
						}
						
						if(btnsInfo[i].YN_ENABLED == "Y" && !this.gfnIsNull(oForm._FORM_SUB_STATUS)) {
							this.gfnSetEnable(btnForm.btnAddSub, true);
						} else {
							this.gfnSetEnable(btnForm.btnAddSub, false);
						}
					
						break;
					case "SAVE_SUB":						
						if(btnForm.btnSavSub.visible == false && btnsInfo[i].YN_VISIBLE == "Y") {
							btnForm.btnSavSub.set_visible(true);
							isCommonSet = true;
						} else if(btnForm.btnSavSub.visible == true && btnsInfo[i].YN_VISIBLE == "N") {
							btnForm.btnSavSub.set_visible(false);
							isCommonSet = true;
						}
						
						if(btnsInfo[i].YN_ENABLED == "Y" && (
							oForm._FORM_SUB_STATUS == "I" || oForm._FORM_SUB_STATUS == "U" || oForm._FORM_SUB_STATUS == "D"
						)) {
							this.gfnSetEnable(btnForm.btnSavSub, true);
						} else {
							this.gfnSetEnable(btnForm.btnSavSub, false);
						}
					
						break;
					case "DELETE_SUB":
						if(btnForm.btnDelSub.visible == false && btnsInfo[i].YN_VISIBLE == "Y") {
							btnForm.btnDelSub.set_visible(true);
							isCommonSet = true;
						} else if(btnForm.btnDelSub.visible == true && btnsInfo[i].YN_VISIBLE == "N") {
							btnForm.btnDelSub.set_visible(false);
							isCommonSet = true;
						}
						
						if(btnsInfo[i].YN_ENABLED == "Y" && !this.gfnIsNull(oForm._FORM_SUB_STATUS)) {
							this.gfnSetEnable(btnForm.btnDelSub, true);
						} else {
							this.gfnSetEnable(btnForm.btnDelSub, false);
						}
						
						break;
				}
			} 
			else {
				//확장버튼
				if(active != true && btnsInfo[i].YN_ENABLED == "Y" && !this.gfnIsNull(btnsInfo[i].COMP_BUTTON)) {
					var objBtn = btnsInfo[i].COMP_BUTTON;
					switch(oForm._FORM_STATUS) {
						case "Q":
							this.gfnSetEnable(objBtn, true);						
							break;
						case "X":
							if(btnsInfo[i].YN_QUERYX == "Y") {
								this.gfnSetEnable(objBtn, true);
							} else {
								this.gfnSetEnable(objBtn, false);
							}
							break;
						case "I":
						case "U":
						case "D":
							if(btnsInfo[i].YN_UPDATEBLOCK == "Y") {
								this.gfnSetEnableExt(objBtn, true);
							} else {
								this.gfnSetEnable(objBtn, false);
							}
							break;
						default:
							if(btnsInfo[i].YN_ENABLED == "Y" && btnsInfo[i].YN_QUERYX == "Y") {
								this.gfnSetEnableExt(objBtn, true);
							} else {
								this.gfnSetEnable(objBtn, false);
							}
							break;
					}
				}
			}
		}
	}

	if(isCommonSet) {
		btnForm.fnSetCommonBtn();
	}
};

/*
 *	확장버튼 관리
 */
pForm.gfnBtnCheck = function(btn, ds)
{
	if(btn==null) return;
	if(!this.gfnIsNull(btn.NM_COLUMN) && btn.IS_ENABLED == true)
	{
		if(ds.rowcount > 0)
		{
			if(ds.rowcount == 1 && this.gfnGetFlag(ds, 0) == "#")
				return;
		
			var row = ds.rowposition;
			
			if(row == -1) row = 0;
			
			if(ds.getColumn(row, btn.NM_COLUMN) == "Y")
				btn.set_enable(true);
			else
				btn.set_enable(false);	
		}
		else
		{
			var btnInfo = "";
			var isBtn = false;
			var btnID = btn.id.replace("btnExt_", "");
			//var btnsInfo = oForm.BtnsInfo;
			for(var i = 0; i < this.BtnsInfo.length; i++) {
				var json = this.BtnsInfo[i];
				if (btnID == json.ID_BUTTON) {
					btnInfo = json;
					isBtn = true;
					break;
				}
			}
	
			if(isBtn == true)
			{
				if(btnInfo.YN_QUERYX == "Y")
				{
					btn.set_enable(true);
				}
				else
				{
					btn.set_enable(false);	
				}
			}
			return;
		}
	}
	return;
}

/*
 *	현재 사용중인 Form 가져오기
 */ 
pForm.gfnGetActiveForm = function() {
	var objApp     = pForm.gfnGetApplication();
	if(this.gfnIsNull(objApp.gvActiveForm)) {
		return objApp.gvWorkFrame.getActiveFrame().form.divWork.form;
	} else {
		return objApp.gvActiveForm;
	}
};

/*
 * 조회조건 검사
 */
pForm.gfnSearchValidate = function(divSearch, dsSearch) {
	if (dsSearch.rowcount==0) return;
	var arrComp = divSearch.form.components;
	var nLength = arrComp.length;
	
	for (var i=0; i<nLength; i++)
	{
		if (arrComp[i] instanceof nexacro.Div)
		{
			if (this.gfnIsNull(arrComp[i].url)) {
				if(!this.gfnSearchValidate(arrComp[i], dsSearch)) {
					return false;
				}
			}
		}
		else
		{
			if (arrComp[i] instanceof nexacro.Static)
			{
				// 추후 class 지정되면 변경
				if(arrComp[i].cssclass == "sta_WF_SchLabelE" || arrComp[i].cssclass == "sta_SearchY" || arrComp[i].textDecoration == "underline" || arrComp[i].cssclass == "sta_WF_tablelabelE") {
					var id = arrComp[i].id;
					var text = arrComp[i].text;
					var colnm = id.replace("sta","").replace("lbl","").replace("lb","");
					if(this.gfnIsNull(dsSearch.getColumn(0, colnm))) {
						// 연관 컨트롤 찾기
						var cont = this._gfnGetSearchControl(arrComp[i].parent, colnm);
						
						// Alert후 실행할 처리
						this.fnVaidateCallback = function() {
							if(cont!=null && cont["setFocus"] != null) {
								cont.setFocus();
							}
						}
						this.gfnAlert(text+"을(를) 입력하세요.", "fnVaidateCallback");
						return false;
					}
				}
			}
		}
	}
	return true;
}


pForm._gfnGetSearchControl = function(objDiv, search) {
	var arrComp = objDiv.components;
	var nLength = arrComp.length;

	for (var i=0; i<nLength; i++)
	{
		var id = arrComp[i].id;
		var colnm = id.replace("ctxt","").replace("txt","").replace("ccf","").replace("cf","").replace("ctcl","").replace("tcl","");
		if(colnm == search) {
			if (!this.gfnIsNull(arrComp[i].url)) {
				var url = arrComp[i].url.toLowerCase();
				if(url.indexOf("codefind")>-1) {
					return arrComp[i].form.CDTextBox;
				} else if(url.indexOf("calyy")>-1 || url.indexOf("calmm")>-1) {
					return arrComp[i].form.TextBox;
				}				
			} else {
				return arrComp[i];
			}
		}
	}
	return null;
}

pForm.gfnGetWorkForm = function(frame) {
	//if (nexacro.getEnvironmentVariable("evQuikView") == "Y") {
	if (frame.form["divWork"] == null) {
		return frame.form;
	} else {
		return frame.form.divWork.form;
	}
}

pForm.gfnGetFormArguments = function(oForm) {
	var frame = oForm.getOwnerFrame();
	if(frame["arguments"] == null && nexacro["_quickview_formurl"] != null) {
		var objApp = nexacro.getApplication();
		objApp._gfnSetFormQV(frame, frame.form);
	}
	return frame.arguments;
}


