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
            this.set_titletext("점검전 사진등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_BUNSO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JEOBSU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JOB\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DONG_HO\" type=\"STRING\" size=\"256\"/><Column id=\"PN_SC\" type=\"STRING\" size=\"256\"/><Column id=\"PN_SCTEL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SIL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACT\" type=\"STRING\" size=\"256\"/><Column id=\"RM_NY\" type=\"STRING\" size=\"256\"/><Column id=\"PIC_BEFORE\" type=\"STRING\" size=\"256\"/><Column id=\"PIC_BEFORE2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBMPR_AFTERWORKSTATE_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBSPR_AFTERASPIC_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divCommon","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_background("#bdd7ee");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","10","4",null,"20","0",null,null,null,null,null,this.divCommon.form);
            obj.set_taborder("1");
            obj.set_text("점검 전 사진 첨부");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            this.divCommon.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staItem01","10","0","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("권역");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem02","10","29","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("단지코드");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar01","staItem01:-1","0","386","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar02","staItem02:-1","29","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem04","10","58","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar04","staItem04:-1","58","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem06","10","87","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("동/호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar06","staItem06:-1","87","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem08","10","116","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar08","staItem08:-1","116","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem09","10","145","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("공종분류");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar10","79","145","386","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem11","10","174","70","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_text("하자내용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem10","208","116","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("AS위치");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar09","277","116","188","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem12","10","223","455","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("점검전이미지1");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_BUNSO","staItem01:5","5","374","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.divData.addChild(obj.name, obj);

            obj = new ImageViewer("imgPIC_BEFORE","10","252","455","253",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_stretch("fixaspectratio");
            obj.set_border("1px solid #c4c2cd");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_SITE","staItem02:5","35","118","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem03","staBar02:-1","29","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("단지명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_JEOBSU","staItem04:5","64","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar03","staItem03:-1","29","188","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SITE","staItem03:5","34","176","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem05","staBar04:-1","58","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar05","staItem05:-1","58","188","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_JOB","staItem05:5","63","176","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_DONG_HO","staItem06:5","92","118","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem07","staBar06:-1","87","70","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("접수자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar07","staItem07:-1","87","188","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC","283","92","176","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtPN_SCTEL","staItem08:5","121","118","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_SIL","283","121","176","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_ACT","staItem09:5","151","374","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBar11","staItem11:-1","174","386","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("texRM_NY","staItem11:5","179","374","40",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_wordWrap("char");
            obj.set_maxlength("4000");
            obj.set_border("1px solid #999899");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staItem13","10","504","455","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_text("점검전이미지2");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new ImageViewer("imgPIC_BEFORE2","10","533","455","253",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_stretch("fixaspectratio");
            obj.set_border("1px solid #c4c2cd");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnUpload2","389","509","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("업로드");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnUpload1","390","228","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("업로드");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtDS_BUNSO","value","dsList","DS_BUNSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtCD_SITE","value","dsList","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtDS_SITE","value","dsList","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.calDT_JEOBSU","value","dsList","DT_JEOBSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.edtCD_JOB","value","dsList","CD_JOB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtDS_DONG_HO","value","dsList","DS_DONG_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edtPN_SC","value","dsList","PN_SC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtPN_SCTEL","value","dsList","PN_SCTEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.edtDS_SIL","value","dsList","DS_SIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.edtDS_ACT","value","dsList","DS_ACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.texRM_NY","value","dsList","RM_NY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DBM_BEFOREIMAGE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {

        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.fileConfig = this.gfnGetFileConfig();
        	this.fileConfig.allowTypes = ["jpg","jpeg","gif","png"]; // 넥사브라우저 전용, 웹은 적용불가
        	this.fileConfig.uploadUrl = this.fileConfig.uploadUrl.replace("path=", "path=");

        	this.fileid = "fileup_0";
        	this.fileup = new FileUpload();
        	this.fileup.init(this.fileid, 0,0,0,0);
        // 	if(this.lookup(this.fileid)) {
        // 		delete this.fileuploads[this.fileid];
        // 		this.removeChild(this.fileid);
        // 	}
        	this.addChild(this.fileid, this.fileup);
        	this.fileup.show();
        	this.fileup.row = 0;
        	this.fileup.addEventHandler("onitemchanged", this.fileup_onitemchanged, this);
        	this.fileup.addEventHandler("onsuccess", this.fileup_onsuccess, this);
        	this.fileup.addEventHandler("onerror", this.fileup_onerror, this);

        	this.fnSelect();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.edtDS_BUNSOS = this.divData.form.edtDS_BUNSO;
        	this.edtCD_SITES = this.divData.form.edtCD_SITE;
        	this.edtDS_SITE = this.divData.form.edtDS_SITE;
        	this.calDT_JEOBSU = this.divData.form.calDT_JEOBSU;
        	this.edtCD_JOB = this.divData.form.edtCD_JOB;
        	this.edtDS_DONG_HO = this.divData.form.edtDS_DONG_HO;
        	this.edtPN_SC = this.divData.form.edtPN_SC;
        	this.edtPN_SCTEL = this.divData.form.edtPN_SCTEL;
        	this.edtDS_ACT = this.divData.form.edtDS_ACT;
        	this.edtDS_SIL = this.divData.form.edtDS_SIL;
        	this.texRM_NY = this.divData.form.texRM_NY;
        	this.imgPIC_BEFORE = this.divData.form.imgPIC_BEFORE;
        	this.imgPIC_BEFORE2 = this.divData.form.imgPIC_BEFORE2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_GROUP", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("DS_DONG", "string");
        	this.dsSelect.addColumn("DS_HO", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("CD_JOB", "int");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");            // 단지코드
        	this.dsUpdate.addColumn("DT_JEOBSU", "string");          // 접수일자
        	this.dsUpdate.addColumn("CD_JOB", "string");             // 작업코드
        	this.dsUpdate.addColumn("PIC_BEFORE", "string");
        	this.dsUpdate.addColumn("PIC_BEFORE2", "string");
        	this.dsUpdate.addColumn("PIC_AFTER", "string");
        	this.dsUpdate.addColumn("PIC_AFTER2", "string");
        	this.dsUpdate.addColumn("PIC_SIGN", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function(obj,e) {
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "ID_GROUP", "");
        	this.dsSelect.setColumn(0, "TY_GUBUN", "AS");
        	this.dsSelect.setColumn(0, "CD_SITE", "020100");
        	this.dsSelect.setColumn(0, "CD_VENDOR", "");
        	this.dsSelect.setColumn(0, "DS_DONG", "");
        	this.dsSelect.setColumn(0, "DS_HO", "");
        	this.dsSelect.setColumn(0, "DT_FROM", "20190925");
        	this.dsSelect.setColumn(0, "DT_TO", "20190925");
        	this.dsSelect.setColumn(0, "CD_JOB" , "2");

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0"
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
         *	저장 버튼
         */
        this.fnSaveImage = function() {
        	this.dsUpdate.clearData();
        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsList.getColumn(0,"CD_SITE"));
        	this.dsUpdate.setColumn(nrow, "DT_JEOBSU", this.dsList.getColumn(0,"DT_JEOBSU"));
        	this.dsUpdate.setColumn(nrow, "CD_JOB", this.dsList.getColumn(0,"CD_JOB"));
        	this.dsUpdate.setColumn(nrow, "PIC_BEFORE", this.dsList.getColumn(0,"PIC_BEFORE"));
        	this.dsUpdate.setColumn(nrow, "PIC_BEFORE2", this.dsList.getColumn(0,"PIC_BEFORE2"));
        	this.dsUpdate.setColumn(nrow, "PIC_AFTER", "");
        	this.dsUpdate.setColumn(nrow, "PIC_AFTER2", "");
        	this.dsUpdate.setColumn(nrow, "PIC_SIGN","");

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "update";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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

        /*
         * 이미지 파일 조회
         */
        this.fnDelImage = function(strPicImg) {


        	this.dsImageFile.clearData();
        	var nrow = this.dsImageFile.addRow();
        	this.dsImageFile.setColumn(nrow, "filepath", "/DB/WORKEND/AS/BEFORE/" + this.key);
        	this.dsImageFile.setColumn(nrow, "filename", strPicImg);

        	var strSvcId    = "deletefile";
        	var strSvcType  = "file/deleteFile";
        	var inProc		= "";
        	var inData      = "input=dsImageFile";
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
        };

        this.fnSave = function() {
        }
        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		if(this.dsList.rowcount > 0 ){
        			if(!this.gfnIsNull(this.dsList.getColumn(0, "PIC_BEFORE")) || !this.gfnIsNull(this.dsList.getColumn(0, "PIC_BEFORE2"))){
        				this.key = this.dsList.getColumn(0, "CD_SITE") + this.dsList.getColumn(0, "DT_JEOBSU")+ this.dsList.getColumn(0, "CD_JOB");
        				this.fnImageView(""); // 이미지 조회
        			}
        		}
        	} else if (svcID == "imagefile") {
        		//trace(this.dsImageFile.saveXML());
        		if( !this.gfnIsNull(this.dsList.getColumn(0, "PIC_BEFORE")) ){
        			var strImgData = this.dsImageFile.lookup("filename",this.dsList.getColumn(0, "PIC_BEFORE"),"filereturn");
        			this.imgPIC_BEFORE.set_image(strImgData);
        		}

        		if( !this.gfnIsNull(this.dsList.getColumn(0, "PIC_BEFORE2")) ){
        			var strImgData = this.dsImageFile.lookup("filename",this.dsList.getColumn(0, "PIC_BEFORE2"),"filereturn");
        			this.imgPIC_BEFORE2.set_image(strImgData);
        		}
        	} else if ( svcID == "update" ){
        		this.fnSelect();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


        /*
         * 점검전 이미지 표시
         */
        this.fnImageView = function(strImgFile) {

        	this.dsImageFile.clearData();

        	var nrow = 0;
        	if( !this.gfnIsNull(this.dsList.getColumn(0, "PIC_BEFORE")) ){
        		nrow = this.dsImageFile.addRow();
        		this.dsImageFile.setColumn(nrow, "filepath", "/DB/WORKEND/AS/BEFORE/" + this.key);
        		this.dsImageFile.setColumn(nrow, "filename", this.dsList.getColumn(0, "PIC_BEFORE"));
        	}

        	if( !this.gfnIsNull(this.dsList.getColumn(0, "PIC_BEFORE2")) ) {
        		nrow = this.dsImageFile.addRow();
        		this.dsImageFile.setColumn(nrow, "filepath", "/DB/WORKEND/AS/BEFORE/" + this.key);
        		this.dsImageFile.setColumn(nrow, "filename", this.dsList.getColumn(0, "PIC_BEFORE2"));
        	}


        	// 서버 이미지파일 base64 로 받아오기
        	var strSvcId    = "imagefile";
        	var strSvcType  = "file/imageFile";
        	var inProc		= "";
        	var inData      = "input=dsImageFile";
        	var outData     = "dsImageFile=input";
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
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         * 파일 업로드
         */
        this.fileup_onitemchanged = function(obj,e) {


        	if(obj.filelist.length > 0) {
        		var filename = obj.filelist[0].filename;
        		var fileext = filename.toLocaleLowerCase().substring(filename.lastIndexOf('.')+1);
        		if(!this.gfnIsExistInArray(this.fileConfig.allowTypes, fileext)) {
        			this.gfnAlert("이미지 파일(" + this.fileConfig.allowTypes.join(',') + ")을 선택하세요.");
        			return;
        		}

        		var sFilePath = obj.value;
        		var dirExpt = sFilePath.lastIndexOf("\\")+1;
        		var sFileName = sFilePath.substr(dirExpt);

        		if( this.btnUploadNm == "btnUpload1" ){
        			if( sFileName == this.dsList.getColumn(0,"PIC_BEFORE2") ){
        				this.gfnAlert("점검전 이미지2에 등록된 파일명("+sFileName+")과 동일한 파일명으로 등록할 수 없습니다.");
        				return;
        			}
        		}

        		if( this.btnUploadNm == "btnUpload2" ){
        			if( sFileName == this.dsList.getColumn(0,"PIC_BEFORE") ){
        				this.gfnAlert("점검전 이미지1에 등록된 파일명("+sFileName+")과 동일한 파일명으로 등록할 수 없습니다.");
        				return;
        			}
        		}

        		this.filepath = "/DB/WORKEND/AS/BEFORE/";

        		var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl + this.filepath +this.key;
        		this.fileup.upload(sUploadUrl);
        	}
        };

        /*
         * 파일 업로드 성공
         */
        this.fileup_onsuccess = function(obj,e) {

        	// 기존 등록한 파일 삭제
        	if( this.btnUploadNm == "btnUpload1" ){
        		if( !this.gfnIsNull(this.dsList.getColumn(0,"PIC_BEFORE")) ) {
        			this.fnDelImage(this.dsList.getColumn(0,"PIC_BEFORE"));
        		}
        		this.dsList.setColumn(0,"PIC_BEFORE",obj.filelist[0].filename);
        	} else if( this.btnUploadNm == "btnUpload2" ){
        		if( !this.gfnIsNull(this.dsList.getColumn(0,"PIC_BEFORE2")) ) {
        			this.fnDelImage(this.dsList.getColumn(0,"PIC_BEFORE2"));
        		}

        		this.dsList.setColumn(0,"PIC_BEFORE2",obj.filelist[0].filename);
        	}

        	this.fnImageView(obj.filelist[0].filename);
        	this.fnSaveImage();
        };

        /*
         * 파일 업로드 실패
         */
        this.fileup_onerror = function(obj,e) {
        	this.gfnAlert("이미지 파일(" + obj.filelist[0].filename + ")을 업로드에 실패하였습니다.\n다시 업로드해주세요.");
        };

        /*
         * 업로드 버튼 클릭
         */
        this.btnUpload_onclick = function(obj,e)
        {
        	this.btnUploadNm = obj.id;
        	this.fileup.filefindbuttons.upfile0.click();
        };

        /*
         * 저장
         */
        this.btnSave_onclick = function(obj,e)
        {
        	this.fnSave();
        };

        /*
         * 서명 초기화
         */
        this.btnClear_onclick = function(obj,e)
        {
        	this.skcPIC_SIGN.clear();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnUpload2.addEventHandler("onclick",this.btnUpload_onclick,this);
            this.divData.form.btnUpload1.addEventHandler("onclick",this.btnUpload_onclick,this);
        };
        this.loadIncludeScript("DBM_BEFOREIMAGE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
