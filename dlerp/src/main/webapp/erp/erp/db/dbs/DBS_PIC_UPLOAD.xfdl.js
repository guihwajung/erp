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
            this.set_titletext("점검전 사진 일괄 업로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_BS_PIC_BEFORE_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBSPR_IPJUASPIC_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JEOBSU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JOB\" type=\"STRING\" size=\"256\"/><Column id=\"PIC_BEFORE\" type=\"STRING\" size=\"256\"/><Column id=\"PIC_AFTER\" type=\"STRING\" size=\"256\"/><Column id=\"PIC_SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReportParam", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_UMGB\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UMGB\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WRITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CHECK_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CHECK_TO\" type=\"STRING\" size=\"256\"/><Column id=\"NM_CHECKER\" type=\"STRING\" size=\"256\"/><Column id=\"NM_SITE_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOBEND\" type=\"STRING\" size=\"256\"/><Column id=\"NM_SOJANG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staMODULE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("단지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staMODULE:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFMAINSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBS_PIC_UPLOAD.xfdl", function() {
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

        	// 파일설정
        	this.filepath = "/DB/WORKEND/BS/BEFORE/";
        	this.fileDownpath = "\\DB\\WORKEND\\BS\\BEFORE\\";
        	this.fileConfig = this.gfnGetFileConfig();
        	this.fileConfig.allowTypes = ["jpg","jpeg","gif","png"]; // 넥사브라우저 전용, 웹은 적용불가
        	this.fileConfig.uploadUrl = this.fileConfig.uploadUrl.replace("path=", "path=" + this.filepath);
        	this.fileConfig.downloadUrl = this.fileConfig.downloadUrl.replace("path=&fileName=", "path=" + this.filepath+"&fileName=");

        	this.flag = "SEL";

        	if( this.FormInfo.ID_GROUP == "6" || this.FormInfo.ID_GROUP == "C" ){
        		this.dsSearch.setColumn(0, "CD_SITE", this.AuthClient.CD_DEPT);
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		this.ccfCD_SITE.form.set_readonly(true);
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnWorkBtn1 = this.gfnFormButtonAdd("WorkBtn1", "fnWorkBtn1");  // 점검전사진 보기
        	this.btnWorkBtn2 = this.gfnFormButtonAdd("WorkBtn2", "fnWorkBtn2");  // 일괄업로드
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBS_PIC_UPLOAD");  // pForm.gfnGridInit = function(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual)
        	this.dxGrid.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("FLAG", "string");
        	this.dsSelect.addColumn("DT_JEOBSU", "string");
        	this.dsSelect.addColumn("CD_JOB", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "FLAG", this.flag);
        	this.dsSelect.setColumn(0, "DT_JEOBSU", "");
        	this.dsSelect.setColumn(0, "CD_JOB", "");
        	if( this.flag == "UPD" ){
        		var strDtJeobsu = "";
        		var strCdJob = "";
        		for( var i =0; i < this.dsList.rowcount; i++ ){
        			strDtJeobsu += this.dsList.getColumn(i,"DT_JEOBSU")+",";
        			strCdJob += this.dsList.getColumn(i,"CD_JOB")+",";
        		}
        		this.dsSelect.setColumn(0, "DT_JEOBSU", strDtJeobsu.substr(0,strDtJeobsu.length-1));
        		this.dsSelect.setColumn(0, "CD_JOB", strCdJob.substr(0,strCdJob.length-1));
        	}


        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("단지코드는 반드시 입력하셔야 합니다.", "fnVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}
        	return validate;
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.flag = "SEL";
        	} else if (svcID == "update") {
        		this.flag = "UPD";
        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", "");
        		dsUserParam.setColumn(nrow, "CD_BUNSO", "");
        		if( this.FormInfo.ID_GROUP == "2" ){
        			dsUserParam.setColumn(nrow, "CD_BUNSO", this.AuthClient.CD_DEPT.substr(1));
        		}
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.dxGrid_oncelldblclick = function(obj,e)
        {
        	var strColumnName = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, this.dxGrid.currentcol);
        	if( strColumnName != "PIC_BEFORE" ) return;
        	this.fnWorkBtn1();
        };
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /*
         *	점검전사진 보기 버튼 클릭
         */
        this.fnWorkBtn1 = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var param = {};
        		param.fileConfig = this.gfnGetFileConfig();
        		param.CF_CD_SITE = this.dsList.getColumn(this.dsList.rowposition,"CD_SITE");
        		param.CF_DT_JEOBSU = this.dsList.getColumn(this.dsList.rowposition,"DT_JEOBSU");
        		param.CF_CD_JOB = this.dsList.getColumn(this.dsList.rowposition,"CD_JOB");
        		param.CF_PIC_IMAGE = this.dsList.getColumn(this.dsList.rowposition,"PIC_BEFORE");
        		param.CF_PIC_IMAGE2 = "";
        		param.CF_TY_PIC = "BEFORE";
        		param.CF_TY_CODE = "BS";
        		param.ID_USER = this.AuthClient.ID_USER;
        		param.CF_DS_SITE = this.dsList.getColumn(this.dsList.rowposition,"DS_SITE");
        		param.CF_DS_DONG = this.dsList.getColumn(this.dsList.rowposition,"DS_DONG");
        		param.CF_DS_HO = this.dsList.getColumn(this.dsList.rowposition,"DS_CUNGHO");
        		param.CF_RM_NY = this.dsList.getColumn(this.dsList.rowposition,"RM_NY");
        		var options = {
        			title: "점검전사진 업로드",
        			width : 320,
        			resizable: true
        		}
        		this.gfnOpenPopup("DBS_JUMGUM_BEFORE_UPPIC","dbs::DBS_JUMGUM_BEFORE_UPPIC.xfdl",param,"fnPopupCallback",options);
        };
        /*
         * 점검전사진 버튼 클릭 후처리
         */
        this.fnPopupCallback = function(strId, val) {
        	if( val.bSave ){
        		this.FormBtns.Select.click();
        	}
        }

        /*
         *	일괄업로드 버튼 클릭
         */
        this.fnWorkBtn2 = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	this.fdg00.open('nexacro17', FileDialog.MULTILOAD);
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fdg00_onclose = function(obj,e)
        {
        	this.addFileList(e.virtualfiles);
        };

        this.addFileList = function(filelist)
        {
        	this.FileList = filelist;
        	if( filelist.length > 50 ) {
        		this.gfnAlert("한번에 50개 이상 등록할 수 없습니다.(선택건수 : "+filelist.length+"건)", "");
        		return 0;
        	}

        	if(filelist.length > 0) {
        		this.dsSaveList.clearData();

        		var vFile;
        		for (var i = 0; i < filelist.length; i++)
        		{
        			vFile = filelist[i];

        			var fileext = vFile.filename.toLocaleLowerCase().substring(vFile.filename.lastIndexOf('.')+1);
        			if(!this.gfnIsExistInArray(this.fileConfig.allowTypes, fileext)) {
        				this.gfnAlert("이미지 파일(" + this.fileConfig.allowTypes.join(',') + ")을 선택하세요.");
        				return 0;
        			}
        			vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
        			vFile.addEventHandler("onerror", this.FileList_onerror , this);

        			vFile.open(null, 1);
        		}

        		if( this.dsSaveList.rowcount == 0){
        			this.gfnAlert("조회된 점검전 사진 파일명과 일치하는 파일이 없습니다.", "");
        		}

        	}
        };

        this.FileList_onsuccess = function(obj, e)
        {
        	var key = "";
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			var sFileName = obj.filename;
        			var dirExptType = sFileName.substr(sFileName.lastIndexOf(".")+1);
        			var nRow = -1;
        			var strPicBefore = "";
        			// 불필요한 파일 제거
        			for(var i=0; i < this.dsList.rowcount; i++){
        				strPicBefore = this.dsList.getColumn(i,"PIC_BEFORE");
        				if( strPicBefore.toLowerCase() ==  sFileName.toLowerCase() ) {
        					nRow = i;
        					break;
        				}
        			}

        			if( nRow == -1 ) break;

        			key = this.dsList.getColumn(nRow,"CD_SITE") + this.dsList.getColumn(nRow,"DT_JEOBSU") + this.dsList.getColumn(nRow,"CD_JOB");
        			this.FileUpTransfer00.addFile(sFileName, obj);

        			var nrow = this.dsSaveList.addRow();
        			this.dsSaveList.setColumn(nrow, "CD_SITE", this.dsList.getColumn(nRow,"CD_SITE"));
        			this.dsSaveList.setColumn(nrow, "DT_JEOBSU", this.dsList.getColumn(nRow,"DT_JEOBSU"));
        			this.dsSaveList.setColumn(nrow, "CD_JOB", this.dsList.getColumn(nRow,"CD_JOB"));
        			this.dsSaveList.setColumn(nrow, "PIC_BEFORE", sFileName);
        			this.dsSaveList.setColumn(nrow, "PIC_AFTER", "");
        			this.dsSaveList.setColumn(nrow, "PIC_SIGN", "");

        			var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl + key; //trace("sUploadUrl = " +sUploadUrl);

        			this.FileUpTransfer00.upload(sUploadUrl);
        			this.FileUpTransfer00.removeFile(sFileName);

        			break;
        	}
        };

        this.FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	trace("FileUpTransfer00_onsuccess: " + e.code + "/" + e.message +"/"+this.dsSaveList.rowcount);
        	if(e.code == 0) {
        		if(this.dsSaveList.rowcount > 0) {
        			var strSvcId    = "update";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "update=dsSaveList";
        			var outData     = "";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        								strSvcType , 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc); // 통신방법 정의 [생략가능]
        		}
        	}
        };

        this.FileUpTransfer00_onprogress = function(obj,e)
        {
        	trace("FileUpTransfer00_onprogress: " + e.loaded+"/"+e.total);
        };

        this.cutFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
        	{
        		sOutput = nApprox.toFixed(0) + " " + aMultiples[nMultiple];
        	}
        	return sOutput;
        };

        this.FileUpTransfer00_onerror = function(obj,e)
        {
        	if(e.errormsg.indexOf("maxsize") > -1) {
        		this.gfnAlert("첨부파일 허용용량("+ this.cutFileSize(nexacro.toNumber(e.errormsg.split(':')[1])) + ")을 초과할 수 없습니다.");
        	} else {
        		this.gfnAlert(e.errormsg);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.fdg00.addEventHandler("onclose",this.fdg00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
        };
        this.loadIncludeScript("DBS_PIC_UPLOAD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
