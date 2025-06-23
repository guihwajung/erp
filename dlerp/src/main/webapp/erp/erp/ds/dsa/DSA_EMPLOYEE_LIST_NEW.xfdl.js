(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("신규사용자등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,170);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSAPR_NEWCHECK_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_NAME\"/><Col id=\"NO_JUMIN1\"/><Col id=\"NO_JUMIN2\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_ID\" type=\"string\" size=\"32\"/><Column id=\"NO_JUMIN\" type=\"string\" size=\"32\"/><Column id=\"DS_NAME\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("새등록자");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE","0","40","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SILHENG","0","staDS_SITE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("주민번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staDS_SITE:-1","40",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staDS_SILHENG:-1","staBg1:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_JUMIN1","staDS_SILHENG:5","74",null,"20","183",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_maxlength("6");
            obj.set_autoskip("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","32.50%","126","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","52.50%","126","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_JUMIN2","231","74",null,"20","44",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_readonly("false");
            obj.set_maxlength("7");
            obj.set_password("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_NAME","92","45",null,"20","183",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","220","75","23","19",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("-");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divData.form.edtNO_JUMIN1","value","dsData","NO_JUMIN1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.edtNO_JUMIN2","value","dsData","NO_JUMIN2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtDS_NAME","value","dsData","DS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DSA_EMPLOYEE_LIST_NEW.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

         	// 이전 화면에서 데이터 받기.
        // 	this.dsData.setColumn(0, "NO_ID", this.getOwnerFrame().NO_ID);
        // 	this.dsData.setColumn(0, "DT_TOIJIK",  this.gfnGetDate());

        	trace("CD_CORP", this.getOwnerFrame().CD_CORP);
        	trace("CD_SITE", this.getOwnerFrame().CD_SITE);

         	this.dsData.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.dxGrid = this.divData.form.objGrid;
        	this.edtDS_NAME = this.divData.form.edtDS_NAME;
        	this.edtNO_JUMIN1 = this.divData.form.edtNO_JUMIN1;
        	this.edtNO_JUMIN2 = this.divData.form.edtNO_JUMIN2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DS_NAME", "string");
        	this.dsSelect.addColumn("NO_JUMIN", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsData.getColumn(0,"DS_NAME"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.edtDS_NAME.setFocus();
        		}
        		this.gfnAlert("성명은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if(this.gfnIsNull(this.dsData.getColumn(0,"NO_JUMIN1"))){
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.edtNO_JUMIN1.setFocus();
        		}
        		this.gfnAlert("주민번호는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if(this.gfnIsNull(this.dsData.getColumn(0,"NO_JUMIN2"))){
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.edtNO_JUMIN2.setFocus();
        		}
        		this.gfnAlert("주민번호는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

        	return validate;

        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
         		if(errorCode == 0)
         		{
         			var empYn = "N";
         			if(this.dsList.rowcount > 0){
        				if(!this.gfnIsNull(this.dsList.getColumn(0, "NO_ID"))){
        					empYn = "Y";
        				}
         			}

        			// 부모창 변수 값 셋팅
        			this.getParentContext().opener.popupVal = {dsName:this.dsData.getColumn(0,"DS_NAME"), noId1:this.dsData.getColumn(0,"NO_JUMIN1"), noId2:this.dsData.getColumn(0,"NO_JUMIN2"), noId:this.dsList.getColumn(0, "NO_ID")};

        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			this.getParentContext().close(empYn);
         		}else
         		{
         			this.gfnAlert(errorMsg);
         		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	//if (!this.fnSelectValidate()) return false;

        	//if(!this.fnCtrlCheck(this.dsData.getColumn(0, "NO_JUMIN1"), this.dsData.getColumn(0, "NO_JUMIN2"))) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();



        	this.dsSelect.setColumn(0, "DS_NAME", this.dsData.getColumn(0, "DS_NAME"));
        	this.dsSelect.setColumn(0, "NO_JUMIN", this.dsData.getColumn(0, "NO_JUMIN1") + this.dsData.getColumn(0, "NO_JUMIN2"));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsData.getColumn(0, "CD_SITE"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]


        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.divData_edtNO_JUMIN1_onkeyup = function(obj,e)
        {
        	if(obj.value.length == 6){
        		this.divData.form.edtNO_JUMIN2.setFocus();
        	}
        };

        //주민번호 valid
        this.fnCtrlCheck = function(ssn1, ssn2){
        	if(this.gfnIsNull(ssn1) || this.gfnIsNull(ssn2)){
        		return false;
        	}
        //	else if(!this.fnForeignerPass(ssn1, ssn2))
        //	{
        //		return true;
        //	}

        // 테스트때문에 임시로 막음
        // 	else if(!this.ssnCheck(ssn1 + ssn2)){
        // 		this.gfnAlert("입력하신 주민번호(외국인등록번호)는 유효한 번호가 아닙니다.");
        // 		return false;
        // 	}else{
        // 		return true;
        // 	}

        	return true;

        }

        //주민번호 유효성 검사
        this.ssnCheck = function(strVal){
        /*
        	var checkNum = [2,3,4,5,6,7,8,9,2,3,4,5];
        	var sum = 0;
        	for(var i=0; i< checkNum.length ; i++){
        		var tmp = value.charAt(i)*checkNum[i];
        		sum += tmp;
        	}

        	var pin = 11-(sum%11);
        	if(pin>=10) pin = pin-10;

        	if(value.charAt(12)==pin){
        		return true;
        	}else{
        		return false;
        	}
        */
          var sum = 0;
          var month = strVal.substr(2,2);
          var day = strVal.substr(4,2);
          if(strVal.length != 13) {
           return false;
          }
          //월의 경우 13월을 넘지 않아야 한다.
          if(month < 13 && month != 0 && day != 0) {
           //2월의 경우
           if(month == 2) {
              //29일을 넘지 않아야 한다.
              if(day > 29) return false;
            } else if(month == 4 || month == 6 || month == 9 || month == 11){
             // 4,6,9,11월의 경우 30일을 넘지 않아야 한다.
              if(day > 30) return false;
            } else {
             // 그외 월이 31일을 넘지 않아야 한다.
              if(day > 31) return false;
            }
          }else {
            return false;
          }
          for(var i = 0; i < 12; i++) {
           sum += Number(strVal.substr(i, 1)) * ((i % 8) + 2);
          }
          if(strVal.substr(6,1) == 1 || strVal.substr(6,1) == 2 || strVal.substr(6,1) == 3 || strVal.substr(6,1) == 4 || strVal.substr(6,1) == 9 || strVal.substr(6,1) == 0) {
           //내국인 주민번호 검증(1900(남/여) 2000(남/여))
           if(((11 - (sum % 11)) % 10) == Number(strVal.substr(12,1))) {
              return true;
            }
            return false;
          }else if(strVal.substr(6,1) == 5 || strVal.substr(6,1) == 6 || strVal.substr(6,1) == 7 || strVal.substr(6,1) == 8) {
          //외국인 주민번호 검증(1900(남/여) 2000(남/여))
            if(Number(strVal.substr(8,1)) % 2 != 0) {
              return false;
            }
            if((((11 - (sum % 11)) % 10 + 2) % 10) == Number(strVal.substr(12, 1))){
             return true;
          }
            return false;
          }
          return true;  //정상 주민번호

        }

        this.fnForeignerPass = function(ssn1, ssn2)
        {
        	switch(ssn2[0])
        	{
        		case "5" :
        		case "6" :
        		case "7" :
        		case "8" :
        			return false;
        	}

        	return true;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staDS_SITE.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.edtNO_JUMIN1.addEventHandler("onkeyup",this.divData_edtNO_JUMIN1_onkeyup,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
        };
        this.loadIncludeScript("DSA_EMPLOYEE_LIST_NEW.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
