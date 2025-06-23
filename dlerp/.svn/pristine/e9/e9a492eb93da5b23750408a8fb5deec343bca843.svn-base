(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmCalYY_Pop");
            this.set_titletext("년 달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(189,206);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staBG","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"33","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("년도 선택");
            obj.getSetter("uWord").set("popup.yearselect");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btnBefore","10","43","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ShuttleL");
            this.addChild(obj.name, obj);

            obj = new Button("btnPdvClose",null,"0","30","33","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"43","21","21","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ShuttleR");
            this.addChild(obj.name, obj);

            obj = new Static("staYYYY","36","43",null,"21","36",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("9999");
            obj.set_textAlign("center");
            obj.set_font("bold 12pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn1","10","70","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2001");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn2","53","70","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2002");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn3","96","70","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2003");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn4","139","70","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2004");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn5","10","113","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2005");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn6","53","113","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2006");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn7","96","113","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2007");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn8","139","113","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2008");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn9","10","156","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2009");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn10","53","156","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2010");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn11","96","156","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2011");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn12","139","156","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2012");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmCalYY_Pop.xfdl", function() {
        /**
        *  굿센 표준화 작업
        *  @MenuPath    cmm > cmmCalYY (공통 년달력)
        *  @FileName 	cmmCalYY.xfdl
        *  @Creator 	consulting
        *  @CreateDate 	2019.01.25
        *  @Desction    년달력
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2019.01.25     	mango 	                최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvToday;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//this.gfnFormOnLoad(this);//초기화[필수]

        	this.fvToday = this.gfnGetDate(); //오늘날자세팅
        	this.fnInit();
        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 달력초기화
        */
        this.fnInit = function()
        {
        	if(new String(this.parent.initvalueid).valueOf() != "undefined") {
        		this.pdvCal_SetCalendar(this.parent.initvalueid);
        	}
        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description   Calendar_ondropdown 이벤트 시 popDiv컴포넌트 띄우기
        */
        this.pdvCal_SetCalendar = function(sDate)
        {
        	if( this.gfnIsNull(sDate) ) sDate = this.fvToday;

        	var selYYYY = sDate.substr(0,4);
        	var sYYYY = nexacro.toNumber(sDate.substr(0,3) + "0");

        	this.pdvCal_ChangeYYYY(sYYYY);
        	this.pdvCal_SelectBtn(selYYYY);
        };

        this.pdvCal_SelectBtn = function(sDate) {
        	this.pdvCal_SelectBtnSet(this.btn12, this.btn12.text == sDate);
        	this.pdvCal_SelectBtnSet(this.btn11, this.btn11.text == sDate);
        	this.pdvCal_SelectBtnSet(this.btn10, this.btn10.text == sDate);
        	this.pdvCal_SelectBtnSet(this.btn9, this.btn9.text == sDate);
        	this.pdvCal_SelectBtnSet(this.btn8, this.btn8.text == sDate);
        	this.pdvCal_SelectBtnSet(this.btn7, this.btn7.text == sDate);
        	this.pdvCal_SelectBtnSet(this.btn6, this.btn6.text == sDate);
        	this.pdvCal_SelectBtnSet(this.btn5, this.btn5.text == sDate);
        	this.pdvCal_SelectBtnSet(this.btn4, this.btn4.text == sDate);
        	this.pdvCal_SelectBtnSet(this.btn3, this.btn3.text == sDate);
        	this.pdvCal_SelectBtnSet(this.btn2, this.btn2.text == sDate);
        	this.pdvCal_SelectBtnSet(this.btn1, this.btn1.text == sDate);
        };

        this.pdvCal_SelectBtnSet = function(btn, bool)
        {
        	btn.setSelectStatus(bool);
        	if (bool) {
        		btn.setFocus();
        	}
        };

        this.pdvCal_ChangeYYYY = function(sYYYY) {
        	var eYYYY = sYYYY + 9;
        	this.staYYYY.set_text(sYYYY + "-" + eYYYY);

        	var startIdx = (sYYYY - 1919) % 4 - 1;
        	sYYYY = sYYYY - startIdx;

        	this.btn1.set_text(sYYYY);
        	this.btn2.set_text(sYYYY + 1);
        	this.btn3.set_text(sYYYY + 2);
        	this.btn4.set_text(sYYYY + 3);
        	this.btn5.set_text(sYYYY + 4);
        	this.btn6.set_text(sYYYY + 5);
        	this.btn7.set_text(sYYYY + 6);
        	this.btn8.set_text(sYYYY + 7);
        	this.btn9.set_text(sYYYY + 8);
        	this.btn10.set_text(sYYYY + 9);
        	this.btn11.set_text(sYYYY + 10);
        	this.btn12.set_text(sYYYY + 11);
        };

        /**
        * @description   월달력 popDiv컴포넌트 닫기
        */
        this.pdvCal_btnPdvCancle_onclick = function(obj,e)
        {
        	this.parent.closePopup();
        };

        /**
        * @description   이전 년도 버튼 클릭
        */
        this.pdvCal_btnBefore_onclick = function(obj,e)
        {
        	var sDate =nexacro.toNumber( this.staYYYY.text.substr(0,4)) - 10;
        	this.pdvCal_ChangeYYYY(sDate);

        };

        /**
        * @description  다음년도 버튼 클릭
        */
        this.pdvCal_btnNext_onclick = function(obj,e)
        {
        	var sDate =nexacro.toNumber( this.staYYYY.text.substr(0,4)) + 10;
        	this.pdvCal_ChangeYYYY(sDate);
        };

        /**
        * @description  월 버튼 클릭
        */
        this.pdvCal_btn1_onclick = function(obj,e)
        {
        	var rtn = obj.text;
        	this.parent.closePopup(rtn);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnBefore.addEventHandler("onclick",this.pdvCal_btnBefore_onclick,this);
            this.btnPdvClose.addEventHandler("onclick",this.pdvCal_btnPdvCancle_onclick,this);
            this.btnNext.addEventHandler("onclick",this.pdvCal_btnNext_onclick,this);
            this.btn1.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn2.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn3.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn4.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn5.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn6.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn7.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn8.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn9.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn10.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn11.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn12.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
        };
        this.loadIncludeScript("cmmCalYY_Pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
