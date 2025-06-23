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
            this.set_titletext("근로자조회및등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1377,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPSA\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TOIJIK\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_WOLGUB\" type=\"INT\" size=\"256\"/><Column id=\"CD_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_ALAS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NM_OPENER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GOYONG\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MEDICARE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_KOOKMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID_REAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EDU\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_FOREIGNER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JIKJONG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SIGUB\" type=\"INT\" size=\"256\"/><Column id=\"DS_ORG_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSAPR_EMPLOYEE_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DSAPR_PERSON_DELETE</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DSAPR_EMPLOYEE_SELECT</Col></Row><Row><Col id=\"SP\">DSAPR_EMPLOYEE_INSERT</Col><Col id=\"TARGET\">d_insert</Col></Row><Row><Col id=\"TARGET\">d_save</Col><Col id=\"SP\">DSAPR_EMPLOYEE_UPDATE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_CODE_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">f_insert</Col><Col id=\"SP\">DSAPR_EMPLOYEE_TRANSFER</Col></Row><Row><Col id=\"SP\">DSAPR_INSU_USER_TEMP_SELECT</Col><Col id=\"TARGET\">insuUserTempSelect</Col></Row><Row><Col id=\"TARGET\">info</Col><Col id=\"SP\">DZUPR_FILEMANAGER_SELECT</Col></Row><Row><Col id=\"SP\">DZZPR_FILEMANAGER_SAVE</Col><Col id=\"TARGET\">upload</Col></Row><Row><Col id=\"TARGET\">upload2</Col><Col id=\"SP\">DZZPR_FILEMANAGER_SAVE</Col></Row><Row><Col id=\"TARGET\">upload3</Col><Col id=\"SP\">DZZPR_FILEMANAGER_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_VISA\" type=\"STRING\" size=\"256\"/><Column id=\"DT_VISA\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PASSPORT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPGUK\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PASSPORT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPSA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ENAME\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SEX\" type=\"STRING\" size=\"256\"/><Column id=\"TY_COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_YUNSU\" type=\"STRING\" size=\"256\"/><Column id=\"TY_HAKRYUK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JIKJONG\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HANDICAP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_HANDICAP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HANDICAP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SEVERE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_INSUAGENCY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_INSUAGENCY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_TAXFREE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NM_OPENER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DELEGATE\" type=\"STRING\" size=\"256\"/><Column id=\"PN_CHILD\" type=\"INT\" size=\"256\"/><Column id=\"PN_PARENT\" type=\"INT\" size=\"256\"/><Column id=\"PN_HANDICAP\" type=\"INT\" size=\"256\"/><Column id=\"PN_OLD\" type=\"INT\" size=\"256\"/><Column id=\"PN_BABY\" type=\"INT\" size=\"256\"/><Column id=\"YN_WIFE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_WOMAN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LASTSCHOOL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PAY_GOYONG\" type=\"STRING\" size=\"256\"/><Column id=\"TG_GOYONG\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GOYONG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GY\" type=\"STRING\" size=\"256\"/><Column id=\"GOYONG_MIGAIP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PAY_SILVER\" type=\"STRING\" size=\"256\"/><Column id=\"TG_SILVER\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SILVER\" type=\"STRING\" size=\"256\"/><Column id=\"SILVER_MIGAIP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PAY_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"TG_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"RETIRE_MIGAIP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SANJAEFR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SANJAETO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PAY_MEDICARE\" type=\"STRING\" size=\"256\"/><Column id=\"TG_MEDICARE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MEDICARE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_MEDICARE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDICARE_MIGAIP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MEDICARE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_MEDICHIDUK\" type=\"STRING\" size=\"256\"/><Column id=\"DT_MEDISANGSIL\" type=\"STRING\" size=\"256\"/><Column id=\"GR_MEDICARE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_MONAVG_ANNUITY\" type=\"INT\" size=\"256\"/><Column id=\"AM_MONAVG_HEALTH\" type=\"INT\" size=\"256\"/><Column id=\"TY_PAY_KOOKMIN\" type=\"STRING\" size=\"256\"/><Column id=\"TG_KOOKMIN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_KOOKMIN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_KOOKMIN\" type=\"STRING\" size=\"256\"/><Column id=\"KOOKMIN_MIGAIP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_KOOKMINCHK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_BOSUWOLAK\" type=\"STRING\" size=\"256\"/><Column id=\"GR_KOOKMIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_KMCHIDUK\" type=\"STRING\" size=\"256\"/><Column id=\"DT_KMSANGSIL\" type=\"STRING\" size=\"256\"/><Column id=\"NOID_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"RT_GUNRO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BLOOD\" type=\"STRING\" size=\"256\"/><Column id=\"TY_WOIGUG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_WOIGUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GOYONG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_APPSITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SEMOK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SEMOK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EDU\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SINGO_JIKJONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SINGO_JIKJONG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_STAY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_STAY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_JIGUB\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT_V\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT_V\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CHAIYONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"DT_IPSA1\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TOIJIK\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_WOLGUB\" type=\"INT\" size=\"256\"/><Column id=\"AM_SIGUB\" type=\"INT\" size=\"256\"/><Column id=\"AM_RWPAY\" type=\"INT\" size=\"256\"/><Column id=\"AM_OTPAY\" type=\"INT\" size=\"256\"/><Column id=\"AM_NWPAY\" type=\"INT\" size=\"256\"/><Column id=\"AM_HWPAY\" type=\"INT\" size=\"256\"/><Column id=\"AM_WWPAY\" type=\"INT\" size=\"256\"/><Column id=\"AM_MWPAY\" type=\"INT\" size=\"256\"/><Column id=\"AM_WOLPAY\" type=\"INT\" size=\"256\"/><Column id=\"AM_BONPAY\" type=\"INT\" size=\"256\"/><Column id=\"DS_ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ETC1\" type=\"INT\" size=\"256\"/><Column id=\"DS_ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ETC2\" type=\"INT\" size=\"256\"/><Column id=\"AM_TOTAL\" type=\"INT\" size=\"256\"/><Column id=\"CD_COST\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DKCOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_COST\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ILPAYGUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SELECT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ANNUITY\" type=\"INT\" size=\"256\"/><Column id=\"YN_GUNROPRINT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JIKJONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CHECKUP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_INTERVIEW\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ENTDOC\" type=\"STRING\" size=\"256\"/><Column id=\"AT_RETIREDOC\" type=\"STRING\" size=\"256\"/><Column id=\"AT_ACCOUNTDOC\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ILGUB\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_PROJECT_DAY\" type=\"INT\" size=\"256\"/><Column id=\"AM_PROJECT_PAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GF_NO_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GF_DS_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"GF_NM_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"GF_DS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"RF_NO_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RF_DS_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"RF_NM_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"RF_DS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"FF_NO_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FF_DS_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FF_NM_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"FF_DS_ETC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CHAIYONG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_JAJIK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TY_WOIGUG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_WOIGUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_SITE\"/><Col id=\"TY_CHAIYONG\"/><Col id=\"TY_JAJIK\"/><Col id=\"NO_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CHAIYONG", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">상용직</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">일용직</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_JAJIK", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_JEOKYONG", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">예</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_JAGYEOK", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">취득</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">상실</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_YOYANG", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">경감</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">비경감</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PAY", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_WOIGUG", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGOYONG_MIGAIP", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRETIRE_MIGAIP", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CHAIYONGDA", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">상용직</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">일용직</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_MEDICARE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">가입</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">미가입</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTransfer", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">DS_NAME</Col><Col id=\"DS_FIELD\">성명</Col></Row><Row><Col id=\"CD_FIELD\">NO_JUMIN</Col><Col id=\"DS_FIELD\">주민등록번호</Col></Row><Row><Col id=\"CD_FIELD\">NO_TEL1</Col><Col id=\"DS_FIELD\">전화번호</Col></Row><Row><Col id=\"CD_FIELD\">CD_ZIP</Col><Col id=\"DS_FIELD\">주소</Col></Row><Row><Col id=\"CD_FIELD\">DS_ADDR2</Col><Col id=\"DS_FIELD\">상세주소</Col></Row><Row><Col id=\"CD_FIELD\">TY_WOIGUG</Col><Col id=\"DS_FIELD\">내/외국인 구분</Col></Row><Row><Col id=\"DS_FIELD\">급여구분</Col><Col id=\"CD_FIELD\">TY_PAY</Col></Row><Row><Col id=\"DS_FIELD\">채용구분</Col><Col id=\"CD_FIELD\">TY_CHAIYONG</Col></Row><Row><Col id=\"CD_FIELD\">TY_JIGUB</Col><Col id=\"DS_FIELD\">지급처구분</Col></Row><Row><Col id=\"DS_FIELD\">계약시작일자</Col><Col id=\"CD_FIELD\">DT_START</Col></Row><Row><Col id=\"DS_FIELD\">계약종료일자</Col><Col id=\"CD_FIELD\">DT_END</Col></Row><Row><Col id=\"DS_FIELD\">입사일자</Col><Col id=\"CD_FIELD\">DT_IPSA</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInsuUserRst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtnData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRemove", this);
            obj._setContents("<ColumnInfo><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filepath\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NM_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_FILE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF3\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave2", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NM_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_FILE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF3\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave3", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NM_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_FILE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REF3\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRemove2", this);
            obj._setContents("<ColumnInfo><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filepath\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRemove3", this);
            obj._setContents("<ColumnInfo><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filepath\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile2", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile3", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">일당제</Col><Col id=\"CD_CODE\">D</Col></Row><Row><Col id=\"DS_CODE\">월급제</Col><Col id=\"CD_CODE\">M</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALY_ISSUE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">개인</Col><Col id=\"CD_CODE\">P</Col></Row><Row><Col id=\"DS_CODE\">거래처</Col><Col id=\"CD_CODE\">V</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTransfer2", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTransfer3", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog2", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog3", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer2", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer3", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_DSX_CFCORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","sta02_DSX_CFCORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DSX_CFCORP");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDSX_CFSITE","cfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_SITE","staDSX_CFSITE:0.0","10.0","253","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFSITE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_CHAIYONG","cfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("채용구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_CHAIYONG","staTY_CHAIYONG:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_CHAIYONG");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_CHAIYONG00","cboTY_CHAIYONG:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("재직구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_JAJIK","staTY_CHAIYONG00:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTY_JAJIK");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","cboTY_JAJIK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("성명");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_ID","sta01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFEMPLOYEE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNO_ID","ccfNO_ID:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","30%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("근로자 목록");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09_00_00","119","261","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta47_00_00_00_00","430","290","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta56","313","290","118","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("거래처코드");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00","1","472","936","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("101");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta09_00_00_00","119","290","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta45_00_00_00","743","290","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta28","119","232","819","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta20","119","203","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta43","430","203","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta58","743","203","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta55","743","174","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta46_00","430","174","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta45_00","743","145","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02","1","0","936","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("21");
            obj.set_text("인적사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta53_00","313","26","118","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("35");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta47_00","430","26","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta09","119","26","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta10","119","174","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta19","119","55","819","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_NAME","125","31","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("25");
            obj.set_maxlength("30");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta29","0","26","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("26");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta30","0","174","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("27");
            obj.set_text("채용구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta39","0","55","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta45","743","26","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta51","624","26","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("30");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta54","119","84","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta65","0","84","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("32");
            obj.set_text("내/외국인 구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNO_TEL1","749","31","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_CHAIYONG","125","179","125","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsTY_CHAIYONGDA");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_WOIGUG","125","89","125","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_WOIGUG");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfDS_ADDR","125","60","807","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_PAY","124","266","125","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsTY_SALY");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta77","1","534","936","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("34");
            obj.set_text("자사경력 관리");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_visible("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub2","1","560","936","117",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("33");
            obj.set_visible("false");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtNO_JUMIN","436","31","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("36");
            obj.set_format("######-#######");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta65_00","313","84","118","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("38");
            obj.set_text("국적");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta54_00","430","84","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta65_00_00","624","84","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta54_00_00","743","84","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02_00","1","119","936","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("42");
            obj.set_text("근로사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta29_00","0","145","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("43");
            obj.set_text("개인번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta09_00","119","145","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta53_00_00","313","145","118","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("45");
            obj.set_text("직종(퇴직공제부금)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta47_00_00","430","145","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta51_00","624","145","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfCD_JIKJONG","436","150","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFJIKJONG_RET");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtID_SABUN","125","150","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("49");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDT_START","313","174","118","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("50");
            obj.set_text("계약시작일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfCD_VENDOR_ACCOUNT","748","295","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DFX_CFACCOUNTMATCH");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staDT_END","624","174","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("52");
            obj.set_text("계약종료일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta40","0","203","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("54");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("tclDT_IPSA","125","208","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta49","313","203","118","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("56");
            obj.set_text("퇴사일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("tclDT_TOIJIK","436","208","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_usesoftkeyboard("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta61","624","203","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta41","0","232","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("60");
            obj.set_text("특기사항");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","125","237","805","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("13");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTY_PAY","0","261","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("62");
            obj.set_text("급여구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("tclDT_START","437","179","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_usesoftkeyboard("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_ILGUB","313","261","118","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("64");
            obj.set_text("일급");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta47_00_00_00","430","261","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staAM_WOLGUB","624","261","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("66");
            obj.set_text("월급");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta45_00_00","743","261","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staTY_JIGUB","0","290","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("68");
            obj.set_text("지급처구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta57","624","290","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("72");
            obj.set_text("거래처계좌");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00","1","354","840","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("74");
            obj.set_text("보험사항");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta04_00","313","380","118","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("75");
            obj.set_text("고용보험");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta09_00_00_00_00_00","430","380","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta05_00","624","380","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("77");
            obj.set_text("국민연금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta47_00_00_00_00_00_00","743","380","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta06_00","0","438","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("79");
            obj.set_text("퇴직공제");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta45_00_00_00_00_00","119","438","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_GOYONG","436","385","23","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("81");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_KOOKMIN","749","385","23","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("82");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_RETIRE","125","443","150","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("83");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta45_00_00_00_00_00_00","119","409","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta06_00_00","0","409","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("85");
            obj.set_text("건강보험증번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta47_00_00_00_00_00_00_00","743","409","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta05_00_00","624","409","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta09_00_00_00_00_00_00","430","409","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_MEDICARE","436","414","23","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("89");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta04_00_00","313","409","118","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("90");
            obj.set_text("건강보험");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNO_MEDICARE","125","414","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_maxlength("13");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta04_00_00_00","313","438","118","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("91");
            obj.set_text("근로내역확인\r\n신고여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta09_00_00_00_00_00_00_00","430","438","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta05_00_00_00","624","438","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("93");
            obj.set_text("근로내역신고용\r\n직종코드");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta47_00_00_00_00_00_00_00_00","743","438","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new CheckBox("chkRT_GUNRO","436","443","150","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("15");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfCD_SINGO_JIKJONG","749","443","184","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("45");
            obj.set_taborder("16");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFJIKJONG");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staGUNRO_ATTCHFILE","0","499","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("95");
            obj.set_text("근로계약서");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta09_00_00_00_00_00_01","119","499","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staRETIRE_ATTCHFILE","313","499","118","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("97");
            obj.set_text("사직서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta47_00_00_00_00_00_00_01","430","499","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staFOR_ATTCHFILE","624","499","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("99");
            obj.set_text("외국인등록증");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta45_00_00_00_00_00_01","743","499","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnGUNRO_ATTCHFILE","125","504","47","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("17");
            obj.set_text("첨부");
            obj.set_cssclass("btnExt2");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnRETIRE_ATTCHFILE","436","504","47","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("18");
            obj.set_text("첨부");
            obj.set_cssclass("btnExt2");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnFOR_ATTCHFILE","749","504","47","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("19");
            obj.set_text("첨부");
            obj.set_cssclass("btnExt2");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfCD_COUNTRY","436","89","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFCOUNTRY");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfCD_VENDOR","436","295","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DHX_CFALLVENDOR_CODEFIND");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnGOYONG","456","385","47","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_initvalueid("GO");
            obj.set_taborder("102");
            obj.set_text("이력");
            obj.set_cssclass("btnExt2");
            obj.set_enable("true");
            obj.set_visible("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ILGUB","436","266","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("14");
            obj.set_format("#,###");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_MEDICARE","456","414","164","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("103");
            obj.set_format("#,###");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_KOOKMIN","769","385","164","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("104");
            obj.set_format("#,###");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta06_00_02","0","380","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("105");
            obj.set_text("보수월액사용여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta45_00_00_00_00_00_02","119","380","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_BOSUWOLAK","125","385","150","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("107");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staGUNRO_ATTCHFILE_NM","175","504","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("108");
            obj.set_text("file_nm");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staRETIRE_ATTCHFILE_NM","486","504","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("109");
            obj.set_text("file_nm");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staFOR_ATTCHFILE_NM","799","504","120","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("110");
            obj.set_text("file_nm");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnInsuUser","867","355","70","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_initvalueid("KO");
            obj.set_taborder("111");
            obj.set_text("보험이력");
            obj.set_cssclass("btnExt2");
            obj.set_visible("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_WOLGUB","748","266","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("112");
            obj.set_format("#,###");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta52_01","0","319","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("113");
            obj.set_text("은행");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta09_00_00_00_00","119","319","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staNO_ACCOUNT","313","319","118","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("계좌번호");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta47_00_00_00_00_00","430","319","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("116");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staNM_OPENER","624","319","120","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("117");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta45_00_00_00_00","743","319","195","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("118");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_JIGUB","125","294","184","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("119");
            obj.set_innerdataset("dsTY_SALY_ISSUE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfCD_BANK","124","324","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DFX_CFBANKCODE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNM_OPENER","748","324","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("120");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNO_ACCOUNT","437","323","183","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("121");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("tclDT_END","748","178","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("122");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_usesoftkeyboard("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboTY_CHAIYONG","value","dsSearch","TY_CHAIYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboTY_JAJIK","value","dsSearch","TY_JAJIK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataRight.form.cboTY_CHAIYONG","value","dsListSub","TY_CHAIYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataRight.form.cboTY_WOIGUG","value","dsListSub","TY_WOIGUG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataRight.form.cfDS_ADDR.form.CDTextBox","value","dsListSub","CD_ZIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.cfDS_ADDR.form.DSTextBox","value","dsListSub","DS_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.cboTY_PAY","value","dsListSub","TY_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.txtDS_NAME","value","dsListSub","DS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.txtNO_TEL1","value","dsListSub","NO_TEL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.txtNO_JUMIN","value","dsListSub","NO_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.cfCD_JIKJONG.form.CDTextBox","value","dsListSub","CD_JIKJONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataRight.form.cfCD_JIKJONG.form.DSTextBox","value","dsListSub","DS_JIKJONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataRight.form.cfCD_VENDOR_ACCOUNT.form.CDTextBox","value","dsListSub","NO_ACCOUNT_V");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.divDataRight.form.cfCD_VENDOR_ACCOUNT.form.DSTextBox","value","dsListSub","DS_ACCOUNT_V");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataRight.form.cfCD_BANK.form.CDTextBox","value","dsListSub","CD_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataRight.form.cfCD_BANK.form.DSTextBox","value","dsListSub","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataRight.form.tclDT_IPSA","value","dsListSub","DT_IPSA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataRight.form.tclDT_TOIJIK","value","dsListSub","DT_TOIJIK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataRight.form.txtDS_REMARK","value","dsListSub","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataRight.form.tclDT_START","value","dsListSub","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataRight.form.cfCD_SINGO_JIKJONG.form.CDTextBox","value","dsListSub","CD_SINGO_JIKJONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataRight.form.cfCD_SINGO_JIKJONG.form.DSTextBox","value","dsListSub","DS_SINGO_JIKJONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataRight.form.chkYN_GOYONG","value","dsListSub","YN_GOYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataRight.form.chkYN_MEDICARE","value","dsListSub","YN_MEDICARE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataRight.form.chkRT_GUNRO","value","dsListSub","RT_GUNRO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataRight.form.chkYN_KOOKMIN","value","dsListSub","YN_KOOKMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataRight.form.chkYN_RETIRE","value","dsListSub","YN_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDataRight.form.txtNO_MEDICARE","value","dsListSub","NO_MEDICARE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDataRight.form.txtID_SABUN","value","dsListSub","NO_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divDataRight.form.cfCD_COUNTRY.form.CDTextBox","value","dsListSub","CD_COUNTRY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divDataRight.form.cfCD_COUNTRY.form.DSTextBox","value","dsListSub","DS_COUNTRY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divDataRight.form.cfCD_VENDOR.form.CDTextBox","value","dsListSub","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divDataRight.form.cfCD_VENDOR.form.DSTextBox","value","dsListSub","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.divDataRight.form.txtAM_MEDICARE","value","dsListSub","AM_MONAVG_HEALTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.divDataRight.form.txtAM_KOOKMIN","value","dsListSub","AM_MONAVG_ANNUITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.divDataRight.form.chkYN_BOSUWOLAK","value","dsListSub","YN_BOSUWOLAK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.divDataRight.form.staGUNRO_ATTCHFILE_NM","text","dsListSub","GF_DS_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.divDataRight.form.staRETIRE_ATTCHFILE_NM","text","dsListSub","RF_DS_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.divDataRight.form.staFOR_ATTCHFILE_NM","text","dsListSub","FF_DS_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.divDataRight.form.txtNM_OPENER","value","dsListSub","NM_OPENER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.divDataRight.form.txtNO_ACCOUNT","value","dsListSub","NO_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.divDataRight.form.tclDT_END","value","dsListSub","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.divDataRight.form.txtAM_WOLGUB","value","dsListSub","AM_WOLGUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.divDataRight.form.txtAM_ILGUB","value","dsListSub","AM_ILGUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.divDataRight.form.cboTY_JIGUB","value","dsListSub","TY_JIGUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divSearch.form.ccfNO_ID.form.CDTextBox","value","dsSearch","NO_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divSearch.form.ccfNO_ID.form.DSTextBox","value","dsSearch","DS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divSearch.form.edtNO_ID","value","dsSearch","NO_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DSA_EMPLOYEE_LIST_20211109.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.popupVal = "";
        this.popupDataYn = "";
        this.insertAddSelYn = "";	// 저장시 insert일 경우 구분하기위한 변수
        this.subSelYn = "";	// 신규등록자 디테일 조회인지 기존 데이터 디테일 조회인지 구분
        this.updateGubun = "";	// 수정방식이 복사인지 기본인지 [ "C" : 복사 ]
        this.saveSchGubun = "";	// 저장 후 저장데이터 선택 조회를 위한 변수
        this.fileConfig = {
        	host : this.gfnGetServerUrl(),
        	uploadUrl : this.gfnGetServerUrl() + "/file/saveFile.do",
        	downloadUrl : this.gfnGetServerUrl() + "/file/downloadFile.do",
        	deleteUrl : this.gfnGetServerUrl() + "/file/deleteFile.do",
        	downImage : "theme://img_file.png",
        	delImage : "theme://btn_del.png",
        	allowTypes : ["html", "txt"],
        	maxCount : 1,
        	maxSize : "200MB",
        	maxTotalSize : "200MB"
        };

        this.fileConfig = this.gfnGetFileConfig();
        this.fileCount = 0;

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

        	this.fnSetCombo();

        	this.fnSearchFileInfo("DS04");
        	this.fnSearchFileInfo("DS07");
        	this.fnSearchFileInfo("DS05");

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.divSearch.form.cfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
         	this.dsSearch.setColumn(0, "CD_SITE", this.AuthClient.CD_SITE);
         	this.divSearch.form.cfCD_SITE.form.DSTextBox.set_value(this.AuthClient.DS_SITE);

        	if(!this.gfnIsNull(this.getOwnerFrame().NO_ID)){
        		this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.divSearch.form.cfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "NO_ID", this.getOwnerFrame().NO_ID);
        		this.dsSearch.setColumn(0, "DS_NAME", this.getOwnerFrame().DS_NAME);
        		this.dsSearch.setColumn(0, "NO_SABUN", this.getOwnerFrame().NO_SABUN);
        	}

        	// GR_SEARCH가 2보다 크면.. 법인코드 disable
        	// GR_SEARCH가 7또는 9 인경우 부서코드 disable
        	//trace("GR_SEARCH", this.FormInfo.GR_SEARCH);
        	if( this.FormInfo.GR_SEARCH  >= "2"){
        		this.divSearch.form.cfCD_CORP.set_enable(false);
        	}

        	if(this.FormInfo.GR_SEARCH == "7" || this.FormInfo.GR_SEARCH == "9"){
        		this.divSearch.form.cfCD_SITE.set_enable(false);
        	}

        	//this.fnSelect();
        	this.FormBtns.Select.click();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Save.set_enable(true);
        	// 서브 버튼 사용(2개 그리드 중간에 있는 파란선) 상단에 공통 셋트가 하나더 생긴다
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn2 = this.gfnFormButtonAdd("BTN_OTHERCOMPANY", "fnOthercompany");
        	//this.btn3 = this.gfnFormButtonAdd("BTN_FERP", "fnEmployeeTransfer");
        	//this.btn4 = this.gfnFormButtonAdd("BTN_COPY", "fnEmployeeCopy"); //복사버튼 막기
        	//this.btn5 = this.gfnFormButtonAdd("BTN_ENTDOC", "fnEntdoc");

        	this.btnPayChange = this.gfnFormButtonAdd("btnPayChange", "fnPayChange"); //임금변동관리
        	this.btnExtension = this.gfnFormButtonAdd("btnExtension", "fnExtension"); //계약연장관리
        	this.btnCareer = this.gfnFormButtonAdd("btnCareer", "fnCareer"); //자사경력관리

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//조회조건 코드파인드
        	this.cfCD_CORP = this.divSearch.form.cfCD_CORP;
        	this.cfCD_SITE = this.divSearch.form.cfCD_SITE;
        	this.cboTY_CHAIYONG = this.divSearch.form.cboTY_CHAIYONG;
        	this.cboTY_JAJIK = this.divSearch.form.cboTY_JAJIK;
        	this.ccfNO_ID = this.divSearch.form.ccfNO_ID;

        	//싱글폼 코드파인드
        	this.cfDS_ADDR = this.divData.form.divDataRight.form.cfDS_ADDR; //주소
        	this.cfCD_COUNTRY = this.divData.form.divDataRight.form.cfCD_COUNTRY;// 국적
        	this.cfCD_JIKJONG = this.divData.form.divDataRight.form.cfCD_JIKJONG;//직종
        	this.cfCD_VENDOR = this.divData.form.divDataRight.form.cfCD_VENDOR;//거래처코드
        	this.cfCD_VENDOR_ACCOUNT = this.divData.form.divDataRight.form.cfCD_VENDOR_ACCOUNT;//거래처계좌
        	this.cfCD_BANK = this.divData.form.divDataRight.form.cfCD_BANK;//은행

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;

        	this.dateValue = new Date();
        	this.timeValue = this.dateValue.getTime();

        	trace("this.dateValue", this.dateValue);
        	trace("this.timeValue", this.timeValue);
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//조회조건 코드파인드
        	this.cfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_ID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_ID.AfterCDTextChanged = "fnAfterCDTextChanged";


        	//싱글폼 코드파인드
        	this.cfDS_ADDR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam"; //주소
        	this.cfDS_ADDR.AfterCDTextChanged = "fnAfterCDTextChanged"; //주소
        	this.cfCD_COUNTRY.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";// 국적
        	this.cfCD_COUNTRY.AfterCDTextChanged = "fnAfterCDTextChanged";// 국적
        	this.cfCD_JIKJONG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";//직종
        	this.cfCD_JIKJONG.AfterCDTextChanged = "fnAfterCDTextChanged";//직종
        	this.cfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";//거래처코드
        	this.cfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";//거래처코드
        	this.cfCD_VENDOR_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";//거래처계좌
        	this.cfCD_VENDOR_ACCOUNT.AfterCDTextChanged = "fnAfterCDTextChanged";//거래처계좌
        	this.cfCD_BANK.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";//은행
        	this.cfCD_BANK.AfterCDTextChanged = "fnAfterCDTextChanged";//은행


        	// 주소 코드파인드 주소명 수정가능상태로 셋팅
        	this.cfDS_ADDR.form.DSTextBox.set_readonly(false);

        	this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSA_EMPLOYEE_LIST2");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);


        	//this.gfnGridInit(this.dxGridSub, this.dsListSub, "DQ", "DQZ_MDM_AUTHORITY");
        	//this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	//목록조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");		// 법인
        	this.dsSelect.addColumn("CD_SITE", "string");		// 현장코드
        	this.dsSelect.addColumn("TY_CHAIYONG", "string");	// 채용구분
        	this.dsSelect.addColumn("TY_JAJIK", "string");		// 재직구분
        	this.dsSelect.addColumn("NO_ID", "string");			// 성명-주민번호
        	this.dsSelect.addColumn("TY_WOIGUG", "string");
        	this.dsSelect.addColumn("TY_WOIGUBUN", "string");
        	this.dsSelect.addColumn("CD_HADO", "string");


        	//상세 상단 조회
        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("NO_ID", "string");
        	this.dsSelectSub.addColumn("CD_SITE", "string");


        	//삭제
        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("NO_ID", "string");
        	this.dsDelete.addColumn("NO_JUMIN", "string");

        	//신규 저장
        	this.dsInsertSub = new Dataset();
        	this.dsInsertSub.addColumn("REG_GUBUN", "string");
        	this.dsInsertSub.addColumn("NO_ID", "string");
        	this.dsInsertSub.addColumn("CD_SITE", "string");
        	this.dsInsertSub.addColumn("DS_NAME", "string");
        	this.dsInsertSub.addColumn("ID_SABUN", "string");
        	this.dsInsertSub.addColumn("TY_WOIGUG", "string");
        	this.dsInsertSub.addColumn("TY_CHAIYONG", "string");
        	this.dsInsertSub.addColumn("CD_JIKJONG", "string");
        	this.dsInsertSub.addColumn("YN_PYEONSUNG", "string");
        	this.dsInsertSub.addColumn("NO_TEL1", "string");
        	this.dsInsertSub.addColumn("NO_TEL2", "string");
        	this.dsInsertSub.addColumn("CD_COST", "string");
        	this.dsInsertSub.addColumn("TY_PYEONSUNG", "string");
        	this.dsInsertSub.addColumn("CD_ZIP", "string");
        	this.dsInsertSub.addColumn("DS_ADDR", "string");
        	this.dsInsertSub.addColumn("DT_IPSA", "string");
        	this.dsInsertSub.addColumn("DT_TOIJIK", "string");
        	this.dsInsertSub.addColumn("DT_START", "string");
        	this.dsInsertSub.addColumn("DT_END", "string");
        	this.dsInsertSub.addColumn("DS_REMARK", "string");
        	this.dsInsertSub.addColumn("TY_PAY", "string");
        	this.dsInsertSub.addColumn("AM_ILGUB", "bigdecimal");
        	this.dsInsertSub.addColumn("AM_WOLGUB", "bigdecimal");
        	this.dsInsertSub.addColumn("TY_JIGUB", "string");
        	this.dsInsertSub.addColumn("CD_VENDOR", "string");
        	this.dsInsertSub.addColumn("NO_ACCOUNT_V", "string");
        	this.dsInsertSub.addColumn("CD_BANK", "string");
        	this.dsInsertSub.addColumn("NO_ACCOUNT", "string");
        	this.dsInsertSub.addColumn("NM_OPENER", "string");
        	this.dsInsertSub.addColumn("CD_BIMOK", "string");
        	this.dsInsertSub.addColumn("CD_SEMOK", "string");
        	this.dsInsertSub.addColumn("DS_SEMOK", "string");
        	this.dsInsertSub.addColumn("YN_GOYONG", "string");
        	this.dsInsertSub.addColumn("YN_RETIRE", "string");
        	this.dsInsertSub.addColumn("GOYONG_MIGAIP", "string");
        	this.dsInsertSub.addColumn("RETIRE_MIGAIP", "string");
        	this.dsInsertSub.addColumn("NO_RETIRE", "string");
        	this.dsInsertSub.addColumn("YN_MEDICARE", "string");
        	this.dsInsertSub.addColumn("YN_KOOKMIN", "string");
        	this.dsInsertSub.addColumn("TY_MEDICARE", "string");
        	this.dsInsertSub.addColumn("TY_KOOKMIN", "string");
        	this.dsInsertSub.addColumn("DT_MEDICHIDUK", "string");
        	this.dsInsertSub.addColumn("DT_KMCHIDUK", "string");
        	this.dsInsertSub.addColumn("DT_MEDISANGSIL", "string");
        	this.dsInsertSub.addColumn("DT_KMSANGSIL", "string");
        	this.dsInsertSub.addColumn("AM_MONAVG_ANNUITY", "int");
        	this.dsInsertSub.addColumn("AM_MONAVG_HEALTH", "int");
        	this.dsInsertSub.addColumn("YN_SILVER", "string");
        	this.dsInsertSub.addColumn("ID_UPDATE", "string");
        	this.dsInsertSub.addColumn("NO_SEQ", "int");
        	this.dsInsertSub.addColumn("NO_MEDICARE", "string");
        	this.dsInsertSub.addColumn("RT_GUNRO", "string");
        	this.dsInsertSub.addColumn("CD_COUNTRY", "string");
        	this.dsInsertSub.addColumn("DS_COUNTRY", "string");
        	this.dsInsertSub.addColumn("CD_STAY", "string");
        	this.dsInsertSub.addColumn("DS_STAY", "string");
        	this.dsInsertSub.addColumn("CD_SINGO_JIKJONG", "string");
        	this.dsInsertSub.addColumn("DS_SINGO_JIKJONG", "string");
        	this.dsInsertSub.addColumn("CD_HADO", "string");
        	this.dsInsertSub.addColumn("DT_CHECKUP", "string");
        	this.dsInsertSub.addColumn("DS_INTERVIEW", "string");
        	this.dsInsertSub.addColumn("AM_SIGUB", "int");
        	this.dsInsertSub.addColumn("CT_PROJECT_DAY", "int");
        	this.dsInsertSub.addColumn("AM_PROJECT_PAY", "bigdecimal");
        	this.dsInsertSub.addColumn("YN_BOSUWOLAK", "string");
        	this.dsInsertSub.addColumn("RTN_NO_ID", "string");

        	//수정 저장
        	this.dsSaveSub = new Dataset();
        	this.dsSaveSub.addColumn("NO_ID", "string");
        	this.dsSaveSub.addColumn("CD_SITE", "string");
        	this.dsSaveSub.addColumn("DS_NAME", "string");
        	this.dsSaveSub.addColumn("NO_SABUN", "string");
        	this.dsSaveSub.addColumn("TY_WOIGUG", "string");
        	this.dsSaveSub.addColumn("TY_CHAIYONG", "string");
        	this.dsSaveSub.addColumn("CD_JIKJONG", "string");
        	this.dsSaveSub.addColumn("CD_COST", "string");
        	this.dsSaveSub.addColumn("NO_TEL1", "string");
        	this.dsSaveSub.addColumn("NO_TEL2", "string");
        	this.dsSaveSub.addColumn("TY_PYEONSUNG", "string");
        	this.dsSaveSub.addColumn("CD_ZIP", "string");
        	this.dsSaveSub.addColumn("DS_ADDR", "string");
        	this.dsSaveSub.addColumn("DT_IPSA", "string");
        	this.dsSaveSub.addColumn("DT_TOIJIK", "string");
        	this.dsSaveSub.addColumn("DT_START", "string");
        	this.dsSaveSub.addColumn("DT_END", "string");
        	this.dsSaveSub.addColumn("DS_REMARK", "string");
        	this.dsSaveSub.addColumn("CD_BIMOK", "string");
        	this.dsSaveSub.addColumn("CD_SEMOK", "string");
        	this.dsSaveSub.addColumn("DS_SEMOK", "string");
        	this.dsSaveSub.addColumn("YN_GOYONG", "string");
        	this.dsSaveSub.addColumn("YN_RETIRE", "string");
        	this.dsSaveSub.addColumn("GOYONG_MIGAIP", "string");
        	this.dsSaveSub.addColumn("RETIRE_MIGAIP", "string");
        	this.dsSaveSub.addColumn("NO_RETIRE", "string");
        	this.dsSaveSub.addColumn("YN_MEDICARE", "string");
        	this.dsSaveSub.addColumn("YN_KOOKMIN", "string");
        	this.dsSaveSub.addColumn("TY_MEDICARE", "string");
        	this.dsSaveSub.addColumn("TY_KOOKMIN", "string");
        	this.dsSaveSub.addColumn("DT_MEDICHIDUK", "string");
        	this.dsSaveSub.addColumn("DT_KMCHIDUK", "string");
        	this.dsSaveSub.addColumn("DT_MEDISANGSIL", "string");
        	this.dsSaveSub.addColumn("DT_KMSANGSIL", "string");
        	this.dsSaveSub.addColumn("AM_MONAVG_ANNUITY", "int");
        	this.dsSaveSub.addColumn("AM_MONAVG_HEALTH", "int");
        	this.dsSaveSub.addColumn("YN_SILVER", "string");
        	this.dsSaveSub.addColumn("ID_UPDATE", "string");
        	this.dsSaveSub.addColumn("TY_PAY", "string");
        	this.dsSaveSub.addColumn("AM_ILGUB", "bigdecimal");
        	this.dsSaveSub.addColumn("AM_WOLGUB", "bigdecimal");
        	this.dsSaveSub.addColumn("TY_JIGUB", "string");
        	this.dsSaveSub.addColumn("CD_VENDOR", "string");
        	this.dsSaveSub.addColumn("NO_ACCOUNT_V", "string");
        	this.dsSaveSub.addColumn("CD_BANK", "string");
        	this.dsSaveSub.addColumn("NO_ACCOUNT", "string");
        	this.dsSaveSub.addColumn("NM_OPENER", "string");
        	this.dsSaveSub.addColumn("NO_SEQ", "int");
        	this.dsSaveSub.addColumn("NO_MEDICARE", "string");
        	this.dsSaveSub.addColumn("RT_GUNRO", "string");
        	this.dsSaveSub.addColumn("CD_COUNTRY", "string");
        	this.dsSaveSub.addColumn("DS_COUNTRY", "string");
        	this.dsSaveSub.addColumn("CD_STAY", "string");
        	this.dsSaveSub.addColumn("DS_STAY", "string");
        	this.dsSaveSub.addColumn("CD_SINGO_JIKJONG", "string");
        	this.dsSaveSub.addColumn("DS_SINGO_JIKJONG", "string");
        	this.dsSaveSub.addColumn("CD_HADO", "string");
        	this.dsSaveSub.addColumn("DT_CHECKUP", "string");
        	this.dsSaveSub.addColumn("DS_INTERVIEW", "string");
        	this.dsSaveSub.addColumn("CT_PROJECT_DAY", "int");
        	this.dsSaveSub.addColumn("AM_PROJECT_PAY", "bigdecimal");
        	this.dsSaveSub.addColumn("TY_UPDATE", "string");
        	this.dsSaveSub.addColumn("YN_BOSUWOLAK", "string");
        	this.dsSaveSub.addColumn("AM_SIGUB", "int");

        	//
        	this.dsSelectInsuUser = new Dataset();
        	this.dsSelectInsuUser.addColumn("CD_SITE", "string");
        	this.dsSelectInsuUser.addColumn("ORG_NO_JUMIN", "string");

        	//공통코드성 조회
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsList.clearData();
        	this.dsListSub.clearData();
        	this.dsListSub2.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "TY_CHAIYONG", this.dsSearch.getColumn(0, "TY_CHAIYONG"));
        	this.dsSelect.setColumn(0, "TY_JAJIK", this.dsSearch.getColumn(0, "TY_JAJIK"));
        	this.dsSelect.setColumn(0, "NO_ID", this.dsSearch.getColumn(0, "NO_ID"));
        	this.dsSelect.setColumn(0, "TY_WOIGUG", "");
        	this.dsSelect.setColumn(0, "TY_WOIGUBUN", "");
        	this.dsSelect.setColumn(0, "CD_HADO", this.dsSearch.getColumn(0, "CD_HADO"));


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
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_CORP"))) {
        		this.fnVaidateCallback = function() {
        			this.cfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 먼저 입력 하셔야 등록 가능합니다.", "fnVaidateCallback");
        		return;
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		this.fnVaidateCallback = function() {
        			this.cfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 먼저 입력 하셔야 등록 가능합니다.", "fnVaidateCallback");
        		return;
        	}

        	// 신규 등록건이 이미 있을경우 추가 신규등록 못함(신규 row가 여러건있을경우 삭제시 row 체인지 이벤트에서 변경건 있다고 나오기때문에 처리)
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.gfnGetFlag(this.dsList, i) == "I"){
        			this.gfnAlert("기존 신규 등록건을 먼저 저장해주세요.");
        			return;
        		}
        	}
        	var nrow = this.gfnGridAdd(this.dxGrid);

        	var param = {CD_CORP:this.dsSearch.getColumn(0,"CD_CORP"), CD_SITE:this.dsSearch.getColumn(0,"CD_SITE")};

        	this.gfnFormOpenNonAuth("DSA", "DSA_EMPLOYEE_LIST_NEW", "fnAddDialogCallback", param, 430, 200);
        }

        this.fnAddDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value == "Y" || value == "N"){
        		this.popupDataYn = value;	// 팝업에서 조회한 데이터가 존재하는지 유무

        		this.dsList.set_enableevent(false);
        		this.dsList.setColumn(this.dsList.rowposition, "NO_JUMIN", this.popupVal.noId1 + "-" + this.popupVal.noId2);
        		this.dsList.setColumn(this.dsList.rowposition, "DS_NAME", this.popupVal.dsName);
        		this.dsList.setColumn(this.dsList.rowposition, "NO_ID", this.popupVal.noId1 + this.popupVal.noId2);
        		this.dsList.setColumn(this.dsList.rowposition, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));

        		this.dsList.set_enableevent(true);
        		this.saveSchGubun = this.popupVal.noId1 + this.popupVal.noId2; //주민번호 : ORG_NO_JUMIN

        		this.subSelYn = "Y";
        	}else{
        		this.dsList.deleteRow(0);
        	}

        	this.FormBtns.SubSelect.click();
        };


        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);

        	this.fnDelProc();

        }

        this.fnDelProc = function(){
        	if(this.dsList.rowcount < 1) return;	// 저장 버튼 항상 활성화 시켰기때문에 조회결과 없을때는 실행 안되게함

        	if(this.dsListSub.getRowType(0) == Dataset.ROWTYPE_INSERT){
        		this.gfnGridDel(this.dxGrid);
        		return;
        	}


        	//삭제
        	if(this.dsListSub.getRowType(0) == Dataset.ROWTYPE_UPDATE){
        		this.gfnAlert("저장 후 삭제해 주세요.");
        		return;
        	}

        	this.gfnConfirm("삭제시 해당 입퇴사 기간의 출역 데이터는 삭제 처리 됩니다. 정말로 삭제할까요?", function(sSvcId, oRtn) {
        			if (!oRtn){
        				return false;
        			}

        			this.dsDelete.clearData();
        			var nrow = this.dsDelete.addRow();
        			this.dsDelete.setColumn(nrow, "CD_SITE", this.dsListSub.getColumn(0, "CD_SITE"));
        			this.dsDelete.setColumn(nrow, "NO_ID", this.dsListSub.getColumn(0, "NO_ID"));
        			this.dsDelete.setColumn(nrow, "NO_JUMIN", this.dsListSub.getColumn(0, "NO_JUMIN"));

        			var strSvcId    = "delete";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "delete=dsDelete";
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
        	)
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	if(this.dsList.rowcount < 1) return;	// 저장 버튼 항상 활성화 시켰기때문에 조회결과 없을때는 실행 안되게함

        	var sDT_TOIJIK = this.gfnTrim(this.dsListSub.getColumn(0, "DT_TOIJIK"),"");
        	var sDT_IPSA = this.gfnTrim(this.dsListSub.getColumn(0, "DT_IPSA"),"");

        // 	if(!this.gfnIsNull(sDT_TOIJIK) || !this.gfnIsNull(sDT_IPSA)){
        // 		if(sDT_TOIJIK < sDT_IPSA){
        // 			this.gfnAlert("퇴사일자는 입사일자 이후로 입력 가능합니다.");
        // 			return;
        // 		}
        // 	}

        	if(this.dsListSub.getColumn(0, "AM_WOLGUB") < this.dsListSub.getColumn(0, "AM_PROJECT_PAY")){
        		this.gfnAlert("예상급여는 예상월급보다 높을 수 없습니다.");
        		return;
        	}

        	if(this.dsListSub.getColumn(0, "RT_GUNRO") == 1){
        		if(this.gfnIsNull(this.dsListSub.getColumn(0, "CD_SINGO_JIKJONG"))){
        			this.gfnAlert("근로내역신고용 직종코드를 입력하세요.");
        			return;
        		}
        		if(this.dsListSub.getColumn(0, "TY_WOIGUG") == "Y"){
        			if(this.gfnIsNull(this.dsListSub.getColumn(0, "CD_COUNTRY")) || this.gfnIsNull(this.dsListSub.getColumn(0, "CD_STAY"))){
        				this.gfnAlert("외국인일경우 국적 및 체류자격은 필수 입니다.");
        				return;
        			}
        		}
        	}

        // 	if(this.gfnIsNull(this.dsListSub.getColumn(0, "GF_NM_FILE"))){
        // 		this.gfnAlert("근로계약서 파일을 업로드하세요.");
        // 		return;
        // 	}

        	//필수 체크 테스트 때문에 일단 뺌
        	if(!this.gfnDataValidate(this.dsListSub, this.dsRequired))return;

        	this.dsInsertSub.clearData();
        	this.dsSaveSub.clearData();

        	var inData      = "";

        	if(this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I"){

        		inData      = "d_insert=dsInsertSub";

        		var nrow = this.dsInsertSub.addRow();
        		this.dsInsertSub.setColumn(nrow, "REG_GUBUN", this.gfnGetFlag(this.dsList, this.dsList.rowposition));
        		this.dsInsertSub.setColumn(nrow, "NO_ID", this.dsListSub.getColumn(0, "NO_ID"));
        		this.dsInsertSub.setColumn(nrow, "CD_SITE", this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"));
        		this.dsInsertSub.setColumn(nrow, "DS_NAME", this.dsListSub.getColumn(0, "DS_NAME"));
        		this.dsInsertSub.setColumn(nrow, "ID_SABUN", this.dsListSub.getColumn(0, "ID_SABUN"));
        		this.dsInsertSub.setColumn(nrow, "TY_WOIGUG", this.dsListSub.getColumn(0, "TY_WOIGUG"));
        		this.dsInsertSub.setColumn(nrow, "TY_CHAIYONG", this.dsListSub.getColumn(0, "TY_CHAIYONG"));
        		this.dsInsertSub.setColumn(nrow, "CD_JIKJONG", this.dsListSub.getColumn(0, "CD_JIKJONG"));
        		this.dsInsertSub.setColumn(nrow, "YN_PYEONSUNG", this.dsListSub.getColumn(0, "YN_PYEONSUNG"));
        		this.dsInsertSub.setColumn(nrow, "NO_TEL1", this.dsListSub.getColumn(0, "NO_TEL1"));
        		this.dsInsertSub.setColumn(nrow, "NO_TEL2", this.dsListSub.getColumn(0, "NO_TEL2"));
        		this.dsInsertSub.setColumn(nrow, "CD_COST", this.dsListSub.getColumn(0, "CD_COST"));
        		this.dsInsertSub.setColumn(nrow, "TY_PYEONSUNG", this.dsListSub.getColumn(0, "TY_PYEONSUNG"));
        		this.dsInsertSub.setColumn(nrow, "CD_ZIP", this.dsListSub.getColumn(0, "CD_ZIP"));
        		this.dsInsertSub.setColumn(nrow, "DS_ADDR", this.dsListSub.getColumn(0, "DS_ADDR"));
        		this.dsInsertSub.setColumn(nrow, "DT_IPSA", this.dsListSub.getColumn(0, "DT_IPSA"));
        		this.dsInsertSub.setColumn(nrow, "DT_TOIJIK", this.dsListSub.getColumn(0, "DT_TOIJIK"));
        		this.dsInsertSub.setColumn(nrow, "DT_START", this.dsListSub.getColumn(0, "DT_START"));
        		this.dsInsertSub.setColumn(nrow, "DT_END", this.dsListSub.getColumn(0, "DT_END"));
        		this.dsInsertSub.setColumn(nrow, "DS_REMARK", this.dsListSub.getColumn(0, "DS_REMARK"));
        		this.dsInsertSub.setColumn(nrow, "TY_PAY", this.dsListSub.getColumn(0, "TY_PAY"));
        		this.dsInsertSub.setColumn(nrow, "AM_ILGUB", this.dsListSub.getColumn(0, "AM_ILGUB"));
        		this.dsInsertSub.setColumn(nrow, "AM_WOLGUB", this.dsListSub.getColumn(0, "AM_WOLGUB"));
        		this.dsInsertSub.setColumn(nrow, "TY_JIGUB", this.dsListSub.getColumn(0, "TY_JIGUB"));
        		this.dsInsertSub.setColumn(nrow, "CD_VENDOR", this.dsListSub.getColumn(0, "CD_VENDOR"));
        		this.dsInsertSub.setColumn(nrow, "NO_ACCOUNT_V", this.dsListSub.getColumn(0, "NO_ACCOUNT_V"));
        		this.dsInsertSub.setColumn(nrow, "CD_BANK", this.dsListSub.getColumn(0, "CD_BANK"));
        		this.dsInsertSub.setColumn(nrow, "NO_ACCOUNT", this.dsListSub.getColumn(0, "NO_ACCOUNT"));
        		this.dsInsertSub.setColumn(nrow, "NM_OPENER", this.dsListSub.getColumn(0, "NM_OPENER"));
        		this.dsInsertSub.setColumn(nrow, "CD_BIMOK", this.dsListSub.getColumn(0, "CD_BIMOK"));
        		this.dsInsertSub.setColumn(nrow, "CD_SEMOK", this.dsListSub.getColumn(0, "CD_SEMOK"));
        		this.dsInsertSub.setColumn(nrow, "DS_SEMOK", this.dsListSub.getColumn(0, "DS_SEMOK"));
        		this.dsInsertSub.setColumn(nrow, "YN_GOYONG", this.dsListSub.getColumn(0, "YN_GOYONG"));
        		this.dsInsertSub.setColumn(nrow, "YN_RETIRE", this.dsListSub.getColumn(0, "YN_RETIRE"));
        		this.dsInsertSub.setColumn(nrow, "GOYONG_MIGAIP", this.dsListSub.getColumn(0, "GOYONG_MIGAIP"));
        		this.dsInsertSub.setColumn(nrow, "RETIRE_MIGAIP", this.dsListSub.getColumn(0, "RETIRE_MIGAIP"));
        		this.dsInsertSub.setColumn(nrow, "NO_RETIRE", this.dsListSub.getColumn(0, "NO_RETIRE"));
        		this.dsInsertSub.setColumn(nrow, "YN_MEDICARE", this.dsListSub.getColumn(0, "YN_MEDICARE"));
        		this.dsInsertSub.setColumn(nrow, "YN_KOOKMIN", this.dsListSub.getColumn(0, "YN_KOOKMIN"));
        		this.dsInsertSub.setColumn(nrow, "TY_MEDICARE", this.dsListSub.getColumn(0, "TY_MEDICARE"));
        		this.dsInsertSub.setColumn(nrow, "TY_KOOKMIN", this.dsListSub.getColumn(0, "TY_KOOKMIN"));
        		this.dsInsertSub.setColumn(nrow, "DT_MEDICHIDUK", this.dsListSub.getColumn(0, "DT_MEDICHIDUK"));
        		this.dsInsertSub.setColumn(nrow, "DT_KMCHIDUK", this.dsListSub.getColumn(0, "DT_KMCHIDUK"));
        		this.dsInsertSub.setColumn(nrow, "DT_MEDISANGSIL", this.dsListSub.getColumn(0, "DT_MEDISANGSIL"));
        		this.dsInsertSub.setColumn(nrow, "DT_KMSANGSIL", this.dsListSub.getColumn(0, "DT_KMSANGSIL"));
        		this.dsInsertSub.setColumn(nrow, "AM_MONAVG_ANNUITY", this.dsListSub.getColumn(0, "AM_MONAVG_ANNUITY"));
        		this.dsInsertSub.setColumn(nrow, "AM_MONAVG_HEALTH", this.dsListSub.getColumn(0, "AM_MONAVG_HEALTH"));
        		this.dsInsertSub.setColumn(nrow, "YN_SILVER", this.dsListSub.getColumn(0, "YN_SILVER"));
        		this.dsInsertSub.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        		this.dsInsertSub.setColumn(nrow, "NO_SEQ", this.dsListSub.getColumn(0, "NO_SEQ"));
        		this.dsInsertSub.setColumn(nrow, "NO_MEDICARE", this.dsListSub.getColumn(0, "NO_MEDICARE"));
        		this.dsInsertSub.setColumn(nrow, "RT_GUNRO", this.dsListSub.getColumn(0, "RT_GUNRO"));
        		this.dsInsertSub.setColumn(nrow, "CD_COUNTRY", this.dsListSub.getColumn(0, "CD_COUNTRY"));
        		this.dsInsertSub.setColumn(nrow, "DS_COUNTRY", this.dsListSub.getColumn(0, "DS_COUNTRY"));
        		this.dsInsertSub.setColumn(nrow, "CD_STAY", this.dsListSub.getColumn(0, "CD_STAY"));
        		this.dsInsertSub.setColumn(nrow, "DS_STAY", this.dsListSub.getColumn(0, "DS_STAY"));
        		this.dsInsertSub.setColumn(nrow, "CD_SINGO_JIKJONG", this.dsListSub.getColumn(0, "CD_SINGO_JIKJONG"));
        		this.dsInsertSub.setColumn(nrow, "DS_SINGO_JIKJONG", this.dsListSub.getColumn(0, "DS_SINGO_JIKJONG"));
        		this.dsInsertSub.setColumn(nrow, "CD_HADO", this.dsListSub.getColumn(0, "CD_HADO"));
        		this.dsInsertSub.setColumn(nrow, "DT_CHECKUP", this.dsListSub.getColumn(0, "DT_CHECKUP"));
        		this.dsInsertSub.setColumn(nrow, "DS_INTERVIEW", this.dsListSub.getColumn(0, "DS_INTERVIEW"));
        		this.dsInsertSub.setColumn(nrow, "AM_SIGUB", this.dsListSub.getColumn(0, "AM_SIGUB"));
        		this.dsInsertSub.setColumn(nrow, "CT_PROJECT_DAY", this.dsListSub.getColumn(0, "CT_PROJECT_DAY"));
        		this.dsInsertSub.setColumn(nrow, "AM_PROJECT_PAY", this.dsListSub.getColumn(0, "AM_PROJECT_PAY"));
        		this.dsInsertSub.setColumn(nrow, "YN_BOSUWOLAK", this.dsListSub.getColumn(0, "YN_BOSUWOLAK"));
        		this.dsInsertSub.setColumn(nrow, "RTN_NO_ID", this.dsListSub.getColumn(0, "RTN_NO_ID"));

        		this.insertAddSelYn = "Y";	// 저장시 insert일 경우 구분하기위한 변수

        	}else{

        		inData      = "d_save=dsSaveSub";

        		var flag = this.dsListSub.getRowType(0);

        		switch(flag) {
        			case Dataset.ROWTYPE_UPDATE	:
        				var nrow = this.dsSaveSub.addRow();

        				this.dsSaveSub.setColumn(nrow, "NO_ID", this.dsListSub.getColumn(0, "NO_ID"));
        				this.dsSaveSub.setColumn(nrow, "CD_SITE", this.dsListSub.getColumn(0, "CD_SITE"));
        				this.dsSaveSub.setColumn(nrow, "DS_NAME", this.dsListSub.getColumn(0, "DS_NAME"));
        				this.dsSaveSub.setColumn(nrow, "NO_SABUN", this.dsListSub.getColumn(0, "NO_SABUN"));
        				this.dsSaveSub.setColumn(nrow, "TY_WOIGUG", this.dsListSub.getColumn(0, "TY_WOIGUG"));
        				this.dsSaveSub.setColumn(nrow, "TY_CHAIYONG", this.dsListSub.getColumn(0, "TY_CHAIYONG"));
        				this.dsSaveSub.setColumn(nrow, "CD_JIKJONG", this.dsListSub.getColumn(0, "CD_JIKJONG"));
        				this.dsSaveSub.setColumn(nrow, "CD_COST", this.dsListSub.getColumn(0, "CD_COST"));
        				this.dsSaveSub.setColumn(nrow, "NO_TEL1", this.dsListSub.getColumn(0, "NO_TEL1"));
        				this.dsSaveSub.setColumn(nrow, "NO_TEL2", this.dsListSub.getColumn(0, "NO_TEL2"));
        				this.dsSaveSub.setColumn(nrow, "TY_PYEONSUNG", this.dsListSub.getColumn(0, "TY_PYEONSUNG"));
        				this.dsSaveSub.setColumn(nrow, "CD_ZIP", this.dsListSub.getColumn(0, "CD_ZIP"));
        				this.dsSaveSub.setColumn(nrow, "DS_ADDR", this.dsListSub.getColumn(0, "DS_ADDR"));
        				this.dsSaveSub.setColumn(nrow, "DT_IPSA", this.dsListSub.getColumn(0, "DT_IPSA"));
        				this.dsSaveSub.setColumn(nrow, "DT_TOIJIK", this.dsListSub.getColumn(0, "DT_TOIJIK"));
        				this.dsSaveSub.setColumn(nrow, "DT_START", this.dsListSub.getColumn(0, "DT_START"));
        				this.dsSaveSub.setColumn(nrow, "DT_END", this.dsListSub.getColumn(0, "DT_END"));
        				this.dsSaveSub.setColumn(nrow, "DS_REMARK", this.dsListSub.getColumn(0, "DS_REMARK"));
        				this.dsSaveSub.setColumn(nrow, "CD_BIMOK", this.dsListSub.getColumn(0, "CD_BIMOK"));
        				this.dsSaveSub.setColumn(nrow, "CD_SEMOK", this.dsListSub.getColumn(0, "CD_SEMOK"));
        				this.dsSaveSub.setColumn(nrow, "DS_SEMOK", this.dsListSub.getColumn(0, "DS_SEMOK"));
        				this.dsSaveSub.setColumn(nrow, "YN_GOYONG", this.dsListSub.getColumn(0, "YN_GOYONG"));
        				this.dsSaveSub.setColumn(nrow, "YN_RETIRE", this.dsListSub.getColumn(0, "YN_RETIRE"));
        				this.dsSaveSub.setColumn(nrow, "GOYONG_MIGAIP", this.dsListSub.getColumn(0, "GOYONG_MIGAIP"));
        				this.dsSaveSub.setColumn(nrow, "RETIRE_MIGAIP", this.dsListSub.getColumn(0, "RETIRE_MIGAIP"));
        				this.dsSaveSub.setColumn(nrow, "NO_RETIRE", this.dsListSub.getColumn(0, "NO_RETIRE"));
        				this.dsSaveSub.setColumn(nrow, "YN_MEDICARE", this.dsListSub.getColumn(0, "YN_MEDICARE"));
        				this.dsSaveSub.setColumn(nrow, "YN_KOOKMIN", this.dsListSub.getColumn(0, "YN_KOOKMIN"));
        				this.dsSaveSub.setColumn(nrow, "TY_MEDICARE", this.dsListSub.getColumn(0, "TY_MEDICARE"));
        				this.dsSaveSub.setColumn(nrow, "TY_KOOKMIN", this.dsListSub.getColumn(0, "TY_KOOKMIN"));
        				this.dsSaveSub.setColumn(nrow, "DT_MEDICHIDUK", this.dsListSub.getColumn(0, "DT_MEDICHIDUK"));
        				this.dsSaveSub.setColumn(nrow, "DT_KMCHIDUK", this.dsListSub.getColumn(0, "DT_KMCHIDUK"));
        				this.dsSaveSub.setColumn(nrow, "DT_MEDISANGSIL", this.dsListSub.getColumn(0, "DT_MEDISANGSIL"));
        				this.dsSaveSub.setColumn(nrow, "DT_KMSANGSIL", this.dsListSub.getColumn(0, "DT_KMSANGSIL"));
        				this.dsSaveSub.setColumn(nrow, "AM_MONAVG_ANNUITY", this.dsListSub.getColumn(0, "AM_MONAVG_ANNUITY"));
        				this.dsSaveSub.setColumn(nrow, "AM_MONAVG_HEALTH", this.dsListSub.getColumn(0, "AM_MONAVG_HEALTH"));
        				this.dsSaveSub.setColumn(nrow, "YN_SILVER", this.dsListSub.getColumn(0, "YN_SILVER"));
        				this.dsSaveSub.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				this.dsSaveSub.setColumn(nrow, "TY_PAY", this.dsListSub.getColumn(0, "TY_PAY"));
        				this.dsSaveSub.setColumn(nrow, "AM_ILGUB", this.dsListSub.getColumn(0, "AM_ILGUB"));
        				this.dsSaveSub.setColumn(nrow, "AM_WOLGUB", this.dsListSub.getColumn(0, "AM_WOLGUB"));
        				this.dsSaveSub.setColumn(nrow, "TY_JIGUB", this.dsListSub.getColumn(0, "TY_JIGUB"));
        				this.dsSaveSub.setColumn(nrow, "CD_VENDOR", this.dsListSub.getColumn(0, "CD_VENDOR"));
        				this.dsSaveSub.setColumn(nrow, "NO_ACCOUNT_V", this.dsListSub.getColumn(0, "NO_ACCOUNT_V"));
        				this.dsSaveSub.setColumn(nrow, "CD_BANK", this.dsListSub.getColumn(0, "CD_BANK"));
        				this.dsSaveSub.setColumn(nrow, "NO_ACCOUNT", this.dsListSub.getColumn(0, "NO_ACCOUNT"));
        				this.dsSaveSub.setColumn(nrow, "NM_OPENER", this.dsListSub.getColumn(0, "NM_OPENER"));
        				this.dsSaveSub.setColumn(nrow, "NO_SEQ", this.dsListSub.getColumn(0, "NO_SEQ"));
        				this.dsSaveSub.setColumn(nrow, "NO_MEDICARE", this.dsListSub.getColumn(0, "NO_MEDICARE"));
        				this.dsSaveSub.setColumn(nrow, "RT_GUNRO", this.dsListSub.getColumn(0, "RT_GUNRO"));
        				this.dsSaveSub.setColumn(nrow, "CD_COUNTRY", this.dsListSub.getColumn(0, "CD_COUNTRY"));
        				this.dsSaveSub.setColumn(nrow, "DS_COUNTRY", this.dsListSub.getColumn(0, "DS_COUNTRY"));
        				this.dsSaveSub.setColumn(nrow, "CD_STAY", this.dsListSub.getColumn(0, "CD_STAY"));
        				this.dsSaveSub.setColumn(nrow, "DS_STAY", this.dsListSub.getColumn(0, "DS_STAY"));
        				this.dsSaveSub.setColumn(nrow, "CD_SINGO_JIKJONG", this.dsListSub.getColumn(0, "CD_SINGO_JIKJONG"));
        				this.dsSaveSub.setColumn(nrow, "DS_SINGO_JIKJONG", this.dsListSub.getColumn(0, "DS_SINGO_JIKJONG"));
        				this.dsSaveSub.setColumn(nrow, "CD_HADO", this.dsListSub.getColumn(0, "CD_HADO"));
        				this.dsSaveSub.setColumn(nrow, "DT_CHECKUP", this.dsListSub.getColumn(0, "DT_CHECKUP"));
        				this.dsSaveSub.setColumn(nrow, "DS_INTERVIEW", this.dsListSub.getColumn(0, "DS_INTERVIEW"));
        				this.dsSaveSub.setColumn(nrow, "CT_PROJECT_DAY", this.dsListSub.getColumn(0, "CT_PROJECT_DAY"));
        				this.dsSaveSub.setColumn(nrow, "AM_PROJECT_PAY", this.dsListSub.getColumn(0, "AM_PROJECT_PAY"));
        				this.dsSaveSub.setColumn(nrow, "TY_UPDATE", this.updateGubun);	// 수정방식
        				this.dsSaveSub.setColumn(nrow, "YN_BOSUWOLAK", this.dsListSub.getColumn(0, "YN_BOSUWOLAK"));
        				this.dsSaveSub.setColumn(nrow, "AM_SIGUB", this.dsListSub.getColumn(0, "AM_SIGUB"));
        				break;
        		}
        	}

        	if (this.dsInsertSub.rowcount == 0 && this.dsSaveSub.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var outData     = "dsRtnData=d_insert";
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
         * 서브 버튼 이벤트
         ************************************************************************/
        // 디테일 싱글폼 데이터 조회 및 자사경력관리 그리드 조회(같이 조회해서 가져온다)
        this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	// 디테일 데이터셋 데이터 삭제
        	//this.dsListSub.clearData();

        	trace("this.saveSchGubun", this.saveSchGubun);

        	var NO_ID = "";
        	if(this.gfnIsNull(this.saveSchGubun)){
        		NO_ID = this.dsList.getColumn(this.dsList.rowposition, "NO_ID");
        	}else{
        		//NO_ID = this.saveSchGubun;
        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if(this.dsList.getColumn(i, "NO_ID")==this.saveSchGubun)
        			{
        				NO_ID = this.dsList.getColumn(i, "NO_ID");
        				this.dsList.set_rowposition(i);
        				break;
        			}
        		}
        	}
        	// 파라미터 셋팅후 초기화.
        	this.saveSchGubun = "";

        	// 디테일 싱글폼 파마리터 데이터셋 셋팅
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "NO_ID", NO_ID);
        	this.dsSelectSub.setColumn(0, "CD_SITE", this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"));

        // 	// 신규등록일경우 TY_CHAIYONG 값을 Y 로 조회, 기존등록건은 1 로 조회
        // 	if(this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I"){
        // 	//if(this.subSelYn == "Y"){
        // 		this.dsSelectSub.setColumn(0, "TY_CHAIYONG", "Y");
        // 	}else{
        // 		this.dsSelectSub.setColumn(0, "TY_CHAIYONG", "1");
        // 	}

        	this.dsListSub.clearData();
        	this.dsSave.clearData();
        	this.dsSave2.clearData();
        	this.dsSave3.clearData();


        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSub=d_select0";
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


        //FERP근로자등록
        this.fnEmployeeTransfer = function()
        {
        // 	this.gfnConfirm("FERP근로자등록을 하시겠습니까?", function(sSvcId, oRtn) {
        // 		if (!oRtn) return false;
        //
        // 		this.dsTransfer.clearData();
        //
        // 		var sCdSite =this.dsSearch.getColumn(this.dsSearch.rowposition, "CD_SITE");
        // 		if (!this.gfnIsNull(sCdSite))
        // 		{
        // 			var nRow = this.dsTransfer.addRow();
        // 			this.dsTransfer.setColumn(nRow, "CD_SITE", sCdSite);
        // 			this.dsTransfer.setColumn(nRow, "ID_INSERT", this.objApp.gdsUserInfo.getColumn(this.objApp.gdsUserInfo.rowposition, "ID_USER"));
        //
        // 			var strSvcId    = "f_insert";
        // 			var strSvcType  = "save";
        // 			var inProc		= "_dsProc";
        // 			var inData      = "f_insert=dsTransfer";
        // 			var outData     = "";
        // 			var strArg      = "";
        // 			var callBackFnc = "fnCallback";
        // 			this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        // 		}
        // 	}, "fnEmployeeTransfer_alert");
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_CORP"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.cfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.cfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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
        	if (svcID == "select") {	//목록조회
        		this.gfnGridAfterSelect(this.dxGrid);
        		//this.gfnSetFormStatus(this, "I");
        		//this.gfnSetFormStatus(this, "U");	// 폼상태 업데이트
        		if(this.saveSchGubun!="" || !this.gfnIsNull(this.saveSchGubun))
        		{
        		}
        		this.fnSelectSub();
        	}
        	else if (svcID == "delete") {
        		this.fnDelAfter = function() {
        			this.FormBtns.Select.click();
        		}
        		this.gfnAlert("삭제되었습니다.", "fnDelAfter");
        	}
        	else if (svcID == "detail") {	//상세조회
        		/*
        		if(this.dsList.rowcount > 0) {
        			this.gfnSetFormStatus(this, "U");	// 저장 버튼을 활성화 시킴(화면 폼상태를 수정상태로 변경)
        		}
        		*/
        		this.updateGubun = "";	// 입력방식

        		// 변경된 데이터가 있다는 메시지가 나오지 않도록 폼상태를 초기화시킨다
        		this.gfnSetFormStatus(this, "Q");	// 이부분 처리하지 않으면 저장후에 바로 화면 닫을때 변경된 데이터있다고 메시지 나옴


        // 		// 신규등록 버튼 클릭후 오른쪽 재조회시 신규등록자가 기존에 등록된자가 아니라면 신규 등록 상태로셋팅(기존 등록자면 기존 자료 조회된다)
        // 		if(this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I" && this.popupDataYn == "Y"){
        // 			trace("popupDataYn1", this.popupDataYn);
        //
        // 			//신규사용자가 기존사용자라면 기존 사용자 재 조회 및 복사 처리
        // 			if(!this.gfnIsNull(this.saveSchGubun) || (this.dsListSub.getColumn(0, "NO_ID") != "undefined" && !this.gfnIsNull(this.dsListSub.getColumn(0, "NO_ID")) && this.dsListSub.getColumn(0, "NO_ID") != ""))
        // 			{
        // 				trace("NO_ID>>>"+this.dsListSub.getColumn(0, "NO_ID"));
        // 				trace("CD_SITE>>>"+this.dsListSub.getColumn(0, "CD_SITE"));
        //
        // 				trace("- indexOf111>>>"+this.dsListSub.getColumn(0, "NO_ID").indexOf("-"));
        // 				trace("- indexOf2222>>>"+this.dsListSub.getColumn(0, "NO_ID").substring(0,this.dsListSub.getColumn(0, "NO_ID").indexOf("-")));
        //
        // 				if(this.dsListSub.getColumn(0, "NO_ID").indexOf("-")>0 && this.dsSelect.getColumn(0, "CD_SITE") == this.dsListSub.getColumn(0, "NO_ID").substring(0,this.dsListSub.getColumn(0, "NO_ID").indexOf("-"))){
        //
        // 					this.gfnGridDel(this.dxGrid);
        // 					//this.fnSelectSub();
        // 					this.gfnAlert("주민등록번호가 동일한 사용자가 있습니다. 해당 사용자 복사하여 진행하시기 바랍니다.", "fnVaidateCallback");
        // 					for (var i = 0; i < this.dsList.rowcount; i++) {
        // 						if(this.dsList.getColumn(i, "NO_ID")==this.dsListSub.getColumn(0, "NO_ID"))
        // 						{
        // 							//NO_ID = this.dsList.getColumn(i, "NO_ID");
        // 							this.dsList.set_rowposition(i);
        // 							break;
        // 						}
        // 					}
        // 					this.fnEmployeeCopy();
        // 				}else{
        //
        // 					this.dsListSubTemp = new Dataset();
        // 					if(this.dsListSub.rowcount > 0){
        // 						this.dsListSubTemp.copyData(this.dsListSub);
        // 						this.dsListSub.clearData();
        // 						this.dsListSub.addRow();
        // 						this.dsListSub.setColumn(0, "DS_NAME", this.popupVal.dsName);
        // 						this.dsListSub.setColumn(0, "NO_JUMIN", this.popupVal.noId1 + "-" + this.popupVal.noId2);
        // 						this.dsListSub.setColumn(0, "NO_TEL1", this.dsListSubTemp.getColumn(0, "NO_TEL1"));
        // 						this.dsListSub.setColumn(0, "CD_ZIP", this.dsListSubTemp.getColumn(0, "CD_ZIP"));
        // 						this.dsListSub.setColumn(0, "DS_ADDR", this.dsListSubTemp.getColumn(0, "DS_ADDR"));
        // 						this.dsListSub.setColumn(0, "TY_WOIGUG", this.dsListSubTemp.getColumn(0, "TY_WOIGUG"));
        // 						this.dsListSub.setColumn(0, "CD_COUNTRY", this.dsListSubTemp.getColumn(0, "CD_COUNTRY"));
        // 						this.dsListSub.setColumn(0, "DS_COUNTRY", this.dsListSubTemp.getColumn(0, "DS_COUNTRY"));
        // 						this.dsListSub.setColumn(0, "CD_STAY", this.dsListSubTemp.getColumn(0, "CD_STAY"));
        // 						this.dsListSub.setColumn(0, "DS_STAY", this.dsListSubTemp.getColumn(0, "DS_STAY"));
        // 						this.dsListSub.setColumn(0, "NO_ID", this.dsListSubTemp.getColumn(0, "NO_ID"));
        // 					}else{
        // 						this.dsListSub.clearData();
        // 						this.dsListSub.addRow();
        //
        // 						this.dsListSub.setColumn(0, "DS_NAME", this.popupVal.dsName);
        // 						this.dsListSub.setColumn(0, "NO_JUMIN", this.popupVal.noId1 + "-" + this.popupVal.noId2);
        // 					}
        // 					this.gfnSetFormStatus(this, "I");
        // 				}
        // 			}else{
        // 				this.dsListSubTemp = new Dataset();
        // 				if(this.dsListSub.rowcount > 0){
        // 					this.dsListSubTemp.copyData(this.dsListSub);
        // 					this.dsListSub.clearData();
        // 					this.dsListSub.addRow();
        // 					this.dsListSub.setColumn(0, "DS_NAME", this.popupVal.dsName);
        // 					this.dsListSub.setColumn(0, "NO_JUMIN", this.popupVal.noId1 + "-" + this.popupVal.noId2);
        // 					this.dsListSub.setColumn(0, "NO_TEL1", this.dsListSubTemp.getColumn(0, "NO_TEL1"));
        // 					this.dsListSub.setColumn(0, "CD_ZIP", this.dsListSubTemp.getColumn(0, "CD_ZIP"));
        // 					this.dsListSub.setColumn(0, "DS_ADDR", this.dsListSubTemp.getColumn(0, "DS_ADDR"));
        // 					this.dsListSub.setColumn(0, "TY_WOIGUG", this.dsListSubTemp.getColumn(0, "TY_WOIGUG"));
        // 					this.dsListSub.setColumn(0, "CD_COUNTRY", this.dsListSubTemp.getColumn(0, "CD_COUNTRY"));
        // 					this.dsListSub.setColumn(0, "DS_COUNTRY", this.dsListSubTemp.getColumn(0, "DS_COUNTRY"));
        // 					this.dsListSub.setColumn(0, "CD_STAY", this.dsListSubTemp.getColumn(0, "CD_STAY"));
        // 					this.dsListSub.setColumn(0, "DS_STAY", this.dsListSubTemp.getColumn(0, "DS_STAY"));
        // 					this.dsListSub.setColumn(0, "NO_ID", this.dsListSubTemp.getColumn(0, "NO_ID"));
        // 				}else{
        // 					this.dsListSub.clearData();
        // 					this.dsListSub.addRow();
        //
        // 					this.dsListSub.setColumn(0, "DS_NAME", this.popupVal.dsName);
        // 					this.dsListSub.setColumn(0, "NO_JUMIN", this.popupVal.noId1 + "-" + this.popupVal.noId2);
        // 				}
        // 				this.gfnSetFormStatus(this, "I");
        // 			}
        // 		}else
        		if(this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I"){
        			trace("popupDataYn2", this.popupDataYn);

        			this.dsListSubTemp = new Dataset();
        			if(this.dsListSub.rowcount > 0){
        				this.dsListSubTemp.copyData(this.dsListSub);
        				this.dsListSub.clearData();
        				this.dsListSub.addRow();
        				this.dsListSub.setColumn(0, "DS_NAME", this.popupVal.dsName);
        				this.dsListSub.setColumn(0, "NO_JUMIN", this.popupVal.noId1 + "-" + this.popupVal.noId2);
        				this.dsListSub.setColumn(0, "NO_TEL1", this.dsListSubTemp.getColumn(0, "NO_TEL1"));
        				this.dsListSub.setColumn(0, "CD_ZIP", this.dsListSubTemp.getColumn(0, "CD_ZIP"));
        				this.dsListSub.setColumn(0, "DS_ADDR", this.dsListSubTemp.getColumn(0, "DS_ADDR"));
        				this.dsListSub.setColumn(0, "TY_WOIGUG", this.dsListSubTemp.getColumn(0, "TY_WOIGUG"));
        				this.dsListSub.setColumn(0, "CD_COUNTRY", this.dsListSubTemp.getColumn(0, "CD_COUNTRY"));
        				this.dsListSub.setColumn(0, "DS_COUNTRY", this.dsListSubTemp.getColumn(0, "DS_COUNTRY"));
        				this.dsListSub.setColumn(0, "CD_STAY", this.dsListSubTemp.getColumn(0, "CD_STAY"));
        				this.dsListSub.setColumn(0, "DS_STAY", this.dsListSubTemp.getColumn(0, "DS_STAY"));
        				this.dsListSub.setColumn(0, "NO_ID", this.dsListSubTemp.getColumn(0, "NO_ID"));
        			}else{
        				trace("행추가");

        				this.dsListSub.clearData();
        				this.dsListSub.addRow();

        				this.dsListSub.setColumn(0, "DS_NAME", this.popupVal.dsName);
        				this.dsListSub.setColumn(0, "NO_ID", this.popupVal.noId1 + this.popupVal.noId2);
        			}
        			this.gfnSetFormStatus(this, "I");
        		}

        		if(this.subSelYn == "Y"){
        			trace("신규추가 조회");
        			this.dsListSub.setColumn(0, "NO_ID", this.popupVal.noId1 + this.popupVal.noId2);
        			this.divData.form.divDataRight.form.cboTY_CHAIYONG.set_readonly(false);
        		}else{
        			if(this.gfnGetFlag(this.dsList, this.dsList.rowposition) != "I"){
        				this.divData.form.divDataRight.form.cboTY_CHAIYONG.set_readonly(true);
        			}
        		}
        		// 초기화
        		this.subSelYn = "";
        		this.fnEnableGuBun();

        	}else if(svcID == "save") {
        		this.fileCount = 0;

        		//저장
        		if (errorCode == 0) {
        			if(this.dsInsertSub.rowcount > 0){
        				this.dsListSub.setColumn(0, "NO_ID", this.dsRtnData.getColumn(0, "RTN_NO_ID"));
        			};

        			//파일업로드 개수 얻기
        			if(this.fileUpTransfer.filelist.length > 0 && !this.gfnIsNull(this.dsListSub.getColumn(0, "GF_NM_FILE"))){
        				this.fileCount = this.fileCount + 1;
        			}
        			if(this.fileUpTransfer2.filelist.length > 0 && !this.gfnIsNull(this.dsListSub.getColumn(0, "RF_NM_FILE"))){
        				this.fileCount = this.fileCount + 1;
        			}
        			if(this.fileUpTransfer3.filelist.length > 0 && !this.gfnIsNull(this.dsListSub.getColumn(0, "FF_NM_FILE"))){
        				this.fileCount = this.fileCount + 1;
        			}

        			trace("파일업로드 개수 얻기 >> this.fileCount", this.fileCount);


        			if(this.fileUpTransfer.filelist.length > 0 && !this.gfnIsNull(this.dsListSub.getColumn(0, "GF_NM_FILE"))){
        				this.fileUpTransfer.setPostData("path", this.dsFile.getColumn(this.dsFile.rowposition, "DS_PATH") + this.dsListSub.getColumn(0, "NO_ID") + "/1");
        				this.fileUpTransfer.upload(this.fileConfig.uploadUrl);
        			};

        			if(this.fileUpTransfer2.filelist.length > 0 && !this.gfnIsNull(this.dsListSub.getColumn(0, "RF_NM_FILE"))){
        				this.fileUpTransfer2.setPostData("path", this.dsFile2.getColumn(this.dsFile2.rowposition, "DS_PATH") + this.dsListSub.getColumn(0, "NO_ID") + "/1");
        				this.fileUpTransfer2.upload(this.fileConfig.uploadUrl);
        			};

        			if(this.fileUpTransfer3.filelist.length > 0 && !this.gfnIsNull(this.dsListSub.getColumn(0, "FF_NM_FILE"))){
        				this.fileUpTransfer3.setPostData("path", this.dsFile3.getColumn(this.dsFile3.rowposition, "DS_PATH") + this.dsListSub.getColumn(0, "NO_ID") + "/1");
        				this.fileUpTransfer3.upload(this.fileConfig.uploadUrl);
        			};

        			//this.saveSchGubun = this.dsListSub.getColumn(0, "NO_ID");
        			this.saveSchGubun = this.dsList.getColumn(this.dsList.rowposition, "NO_ID");

        			this.fnSaveAfter = function() {
        				if(this.insertAddSelYn == "Y"){
        					this.insertAddSelYn = "";	// 초기화시킨다
        					// 왼쪽 그리드 재조회
        					this.FormBtns.Select.click();
        				}else{
        					this.FormBtns.SubSelect.click();
        				}
        			}
        			this.gfnAlert("저장되었습니다", "fnSaveAfter");

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "f_insert") {
        		if (errorCode == 0) {
        			this.gfnAlert("정상 처리되었습니다.", [], "f_insert_alert", this.fnSelect);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        //	}
        // 	else if(svcID == "selectInsuUser") {
        // 		this.dsListSub.setColumn(0, "YN_KOOKMIN", this.dsInsuUserRst.getColumn("0", "YN_KOOKMIN"));
        // 		this.dsListSub.setColumn(0, "YN_MEDICARE", this.dsInsuUserRst.getColumn("0", "YN_MEDICARE"));
        // 		this.dsListSub.setColumn(0, "YN_SILVER", this.dsInsuUserRst.getColumn("0", "YN_SILVER"));
        // 		this.dsListSub.setColumn(0, "AM_KOOKMIN", this.dsInsuUserRst.getColumn("0", "AM_KOOKMIN"));
        // 		this.dsListSub.setColumn(0, "AM_MEDICARE", this.dsInsuUserRst.getColumn("0", "AM_MEDICARE"));
        // 		this.dsListSub.setColumn(0, "AM_SILVER", this.dsInsuUserRst.getColumn("0", "AM_SILVER"));
        	} else if(svcID == "fileInfo") {
        		if (errorCode == 0) {
        			//this.fnSelect();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "saveFile") {
        		if (errorCode == 0) {
        			this.saveSchGubun = this.dsList.getColumn(this.dsList.rowposition, "NO_ID");
        			this.fnSelectSub();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "removeFile") {
        		if (errorCode == 0) {
        			//this.fileUpTransfer.upload(this.fileConfig.uploadUrl,"fileUploadCallBack");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "removeFile2") {
        		if (errorCode == 0) {
        			//this.fileUpTransfer2.upload(this.fileConfig.uploadUrl,"fileUploadCallBack");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "removeFile3") {
        		if (errorCode == 0) {
        			//this.fileUpTransfer3.upload(this.fileConfig.uploadUrl,"fileUploadCallBack");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.fileUploadCallBack = function()
        {
        	this.gfnAlert("파일 업로드가 완료 되었습니다.");
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	//조회조건 코드파인드
        	if (id == "cfCD_CORP") {
         		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
         		dsUserParam.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        	}
        	else if (id == "cfCD_SITE"){
        		if (this.gfnIsNull(this.cfCD_CORP.form.CDTextBox.value)) {
        			this.gfnAlert("법인을 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));	// 법인코드
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
         		dsUserParam.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        	}
        	else if (id == "ccfNO_ID"){
         		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
         			this.gfnAlert("현장코드를 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}


        	//싱글폼 코드파인드
        	if (id == "cfDS_ADDR") {
        		;//
        	}
        	else if (id == "cfCD_COUNTRY"){
        		;//
        	}
        	else if (id == "cfCD_JIKJONG"){
        		//dsUserParam.setColumn(nrow, "CD_SITE", this.dsSelect.getColumn(0, "CD_SITE"));
        	}
        	else if (id == "cfCD_VENDOR"){ //거래처코드
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));	// 법인코드
        	}
        	else if (id == "cfCD_VENDOR_ACCOUNT"){ //거래처계좌
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_PAY", this.dsListSub.getColumn(0, "CD_VENDOR"));
        	}
        	else if (id == "cfCD_BANK"){
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "cfCD_CORP") {
        		this.cfCD_SITE.form.fnCodeFindClear();
        		this.ccfNO_ID.form.fnCodeFindClear();
        		this.divSearch.form.edtNO_ID.set_value("");
        	}

        	if(id == "cfCD_SITE") {
        		this.ccfNO_ID.form.fnCodeFindClear();
        		this.divSearch.form.edtNO_ID.set_value("");
        	}

        	if(id == "ccfNO_ID") {
        		var sNO_ID = arr[0]["NO_ID"];
        		this.divSearch.form.edtNO_ID.set_value(sNO_ID);
        	}
        }


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {

            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {


        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;

        		/*
        		// 신규등록 버튼 클릭후
        		if(this.gfnGetFlag(this.dsList, this.dsList.rowposition) != "I"){
        			// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        			this.FormBtns.SubSelect.click();
        			obj.oldrow = -1;
        		}else{
        			// 신규등록시 오른쪽 부분 초기화
        			this.dsListSub.clearData();
        			this.dsListSub2.clearData();
        			this.divData.form.divDataRight.form.txtAM_ILDANG.set_value("");
        			this.dsListSub.addRow();
        			this.gfnSetFormStatus(this, "I");
        		}
        		*/
        	}
        };

        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		//var flag = this.gfnGetFlag(this.dsListSub, i);
        		var flag = this.dsListSub.getRowType(i);
        		//if (flag == "I" || flag == "U" || flag == "D") {
        		// 신규등록 row에서 저장 하지 않고 row 이동시 변경된 데이터가 있다고 메시지뿌리고 이동하면 삭제 처리한다
        		//if (flag == 2 || flag == 4 || flag == 8 || this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I") {
        		if (flag == 4 || this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I") {
        			can_rowchange = false;
        			break;
        		}
        	}

        	if(!can_rowchange) {
        		this.oldRow = e.oldrow;
        		this._row = e.newrow;

        		if(this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I"){
        			this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시면 신규등록건은 삭제됩니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        		}else{
        			this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        		}
        	}
        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);

        		// 변경된 row가 insert row일경우 해당 row를 삭제한다(왼쪽 그리드)
        		if(this.gfnGetFlag(this.dsList, this.oldRow) == "I"){
        			this.dsList.deleteRow(this.oldRow);
        		}
        	}
        }

        // 자사경력관리 그리드 첨부파일 버튼
        this.fnGrid_ExpandUp = function(obj, e) {
        // 	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        // 	if(colnm == "FILE_ATTACH") {
        // 		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        // 		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        // 		//if(this.gfnGetFlag(this.dsList, e.row) == "I"){
        // 		if(this.dsListSub.getRowType(e.row) == 2){
        // 			this.gfnAlert("저장 후 파일첨부 진행.");
        // 			return false;
        // 		}
        //
        // 		var fileManager = {};
        // 		fileManager.CD_GUBUN = "DS01";
        // 		fileManager.CD_DIR = [this.dsListSub2.getColumn(e.row, "NO_ID")];
        //
        // 		if(this.FormInfo.TY_AUTH == "R") {
        // 			fileManager.IS_READONLY = true;
        // 		} else {
        // 			fileManager.IS_READONLY = false;
        // 		}
        // 		this.gfnFileManager(fileManager, "fnFileCallback");
        // 	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.dsListSub.clearData();
        	}
        };

        this.divData_ondragmove = function(obj,e)
        {
           if(e.userdata == "splitter") {
              this.divData.form.divSplitter.set_left(e.clientx);
              this.divData.form.resetScroll();
           }
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
           e.set_userdata("splitter");
           return true;
        };
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		this.gfnGridClear(this.dxGrid);
        		this.dsListSub.clearData();
        	}
        };


        this.fnSetCombo = function() {
        	this.dsCombo.clearData();

        // 	this.dsCombo.addRow();	// 채용구분(검색조건)
        // 	this.dsCombo.setColumn(0, "CD_SYSTEM", "DS");
        // 	this.dsCombo.setColumn(0, "CD_TYPE", "25");

        	// 같은 SP 다중건 조회는 row 추가해서
        	this.dsCombo.addRow();	// 재직구분(검색조건)
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DS");
        	this.dsCombo.setColumn(0, "CD_TYPE", "26");


        	this.dsCombo.addRow();	// 급여구분(데이터)
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DS");
        	this.dsCombo.setColumn(1, "CD_TYPE", "24");

        	this.dsCombo.addRow();	// 내/외국인구분(데이터)
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DS");
        	this.dsCombo.setColumn(2, "CD_TYPE", "93");
        	/*
        	this.dsCombo.addRow();	// 편성여부(데이터)
        	this.dsCombo.setColumn(4, "CD_SYSTEM", "DS");
        	this.dsCombo.setColumn(4, "CD_TYPE", "94");

        	this.dsCombo.addRow();	// 편성구분(데이터)
        	this.dsCombo.setColumn(5, "CD_SYSTEM", "DS");
        	this.dsCombo.setColumn(5, "CD_TYPE", "95");
        	*/
        	this.dsCombo.addRow();	// 고용보험 제외사유(데이터)
        	this.dsCombo.setColumn(3, "CD_SYSTEM", "DS");
        	this.dsCombo.setColumn(3, "CD_TYPE", "20");

        	this.dsCombo.addRow();	// 퇴직공제 제외사유(데이터)
        	this.dsCombo.setColumn(4, "CD_SYSTEM", "DS");
        	this.dsCombo.setColumn(4, "CD_TYPE", "21");

        // 	this.dsCombo.addRow();	// 채용구분(데이터_'전체'가 없는 버젼)
        // 	this.dsCombo.setColumn(5, "CD_SYSTEM", "DS");
        // 	this.dsCombo.setColumn(5, "CD_TYPE", "25");


        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	//var outData     = "dsTY_CHAIYONG=combo0 dsTY_JAJIK=combo1 dsTY_PAY=combo2 dsTY_WOIGUG=combo3 dsGOYONG_MIGAIP=combo4 dsRETIRE_MIGAIP=combo5 dsTY_CHAIYONGDA=combo6";
        	var outData     = "dsTY_JAJIK=combo0 dsTY_PAY=combo1 dsTY_WOIGUG=combo2 dsGOYONG_MIGAIP=combo3 dsRETIRE_MIGAIP=combo4";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        this.fnCallbackCombo = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "combo") {
        		this.dsTY_CHAIYONG.insertRow(0);
        		this.dsTY_CHAIYONG.setColumn(0, "CD_CODE", "%");
        		this.dsTY_CHAIYONG.setColumn(0, "DS_CODE", "전체");
        		this.cboTY_CHAIYONG.set_index(0);

        		this.dsTY_JAJIK.insertRow(0);
        		this.dsTY_JAJIK.setColumn(0, "CD_CODE", "%");
        		this.dsTY_JAJIK.setColumn(0, "DS_CODE", "전체");
         		this.cboTY_JAJIK.set_index(0);

        		if(!this.gfnIsNull(this.getOwnerFrame().NO_ID)){
        			this.fnSelect();
        		}
        	}
        };

        // 퇴사일자 달력 버튼 클릭시 달력창이 아니라 팝업 화면을 띄움
        this.divData_divDataRight_tclDT_TOIJIK_onlbuttonup = function(obj,e)
        {
        // 	// 선택된 row가 있을 경우에만 팝업을 띄움
        // 	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        //
        // 	var flag = this.dsListSub.getRowType(0);
        // 	if (flag == 2 || flag == 4) {
        // 		this.gfnAlert("변경 사항이 있습니다. 저장 후 선택하세요.");
        //  		return false;
        // 	}
        //
        //
        // 	var param = {};
        // 	param.NO_ID = this.dsList.getColumn(this.dsList.rowposition, "NO_ID");
        //
        // 	// 화면 오픈.
        // 	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        // 	// 타 모듈 화면 호출시 지정할것.
        //
        // 	//this.gfnFormOpen("DSA", "DSA_EMPLOYEE_LIST_TOJIK", "", param);
        // 	//this.gfnFormOpenNonAuth("DSA", "DSA_EMPLOYEE_LIST_TOJIK", "fnDialogCallback", param, 500, 400);
        // 	this.gfnFormOpenNonAuth("DSA", "DSA_EMPLOYEE_LIST_TOJIK", "fnDialogCallback", param, 430, 340);
        };

        // this.fnHistoryDialogCallback = function(svcID, value) {
        // 	if(this.gfnGetFlag(this.dsList, this.dsList.rowposition) != "I"){
        // 		this.FormBtns.SubSelect.click();
        // 	}else{
        // 		this.SearchInsuUser();
        // 	}
        // };

        this.fnDialogCallback = function(svcID, value) {
        // 	// 리턴값
        // 	if(value == true){
        // 		// 확인 클릭하면 디테일 재조회
        // 		this.FormBtns.Select.click();
        // 		//this.FormBtns.SubSelect.click();
        // 	}
        //
        // 	// 팝업창 닫힌 다음에 포커스가 남아있으면 입력을 할수 있기때문에 포커스를 다른데로 옮김.
        // 	this.divData.form.divDataRight.form.tclDT_IPSA.setFocus();
        };


        // 임금변동관리 버튼 클릭시 팝업화면 호출
         this.fnPayChange = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.CD_CORP = this.dsSearch.getColumn(0,"CD_CORP");
        	param.DS_CORP = this.cfCD_CORP.form.DSTextBox.value;
        	param.CD_SITE = this.dsSearch.getColumn(0,"CD_SITE");
        	param.DS_SITE = this.cfCD_SITE.form.DSTextBox.value;
        	param.NO_SABUN = this.dsList.getColumn(this.dsList.rowposition, "NO_SABUN");
        	param.DS_NAME = this.dsList.getColumn(this.dsList.rowposition, "DS_NAME");
            param.NO_ID = this.dsList.getColumn(this.dsList.rowposition, "NO_ID");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DSA_PAYCHANGE", "", param, 900, 750);
        }

        // 현장겸직관리 버튼 클릭시 팝업화면 호출
         this.fnOthercompany = function(obj,e) {
        // 	// 선택된 row가 있을 경우에만 팝업을 띄움
        // 	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        //
        // 	var param = {};
        // 	param.NO_ID = this.dsList.getColumn(this.dsList.rowposition, "NO_JUMIN");
        // 	param.DS_NAME = this.dsList.getColumn(this.dsList.rowposition, "DS_NAME");
        //     param.NO_ID_REAL = this.dsList.getColumn(this.dsList.rowposition, "NO_ID");
        //
        // 	// 화면 오픈.
        // 	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        // 	// 타 모듈 화면 호출시 지정할것.
        //
        // 	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DSA_OTHERCOMPANY", "", param, 400, 480);
        }

        // 계약연장관리 버튼 클릭시 팝업화면 호출
         this.fnExtension = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	param.CD_CORP = this.dsSearch.getColumn(0,"CD_CORP");
        	param.DS_CORP = this.cfCD_CORP.form.DSTextBox.value;
        	param.CD_SITE = this.dsSearch.getColumn(0,"CD_SITE");
        	param.DS_SITE = this.cfCD_SITE.form.DSTextBox.value;
        	param.NO_SABUN = this.dsList.getColumn(this.dsList.rowposition, "NO_SABUN");
        	param.DS_NAME = this.dsList.getColumn(this.dsList.rowposition, "DS_NAME");
            param.NO_ID = this.dsList.getColumn(this.dsList.rowposition, "NO_ID");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DSA_EXTENSION", "", param, 1220, 750);
        }

        // 자사경력관리
        this.fnCareer = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.NO_SABUN = this.dsList.getColumn(this.dsList.rowposition, "NO_SABUN");
        	param.DS_NAME = this.dsList.getColumn(this.dsList.rowposition, "DS_NAME");
            param.NO_ID = this.dsList.getColumn(this.dsList.rowposition, "NO_ID");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DSA_CAREER", "", param, 1220, 750);
        }

        this.dsListSub_cancolumnchange = function(obj,e){
        	if(e.columnid == "YN_GOYONG"){
        		var ORG_NO_JUMIN = this.dsList.getColumn(this.dsList.rowposition, "NO_ID") + ""; // 주민번호
        		var DT_IPSA = this.dsListSub.getColumn(0, "DT_IPSA");	// 입사일자

        		if(!this.gfnIsNull(ORG_NO_JUMIN) && !this.gfnIsNull(DT_IPSA)){
        			var JUMIN_SEX = ORG_NO_JUMIN.substring(6,7);
        			var nPayYear = "";

        			if(JUMIN_SEX == "1" || JUMIN_SEX == "2" || JUMIN_SEX == "5" || JUMIN_SEX == "6") {
        				nPayYear = "19" + ORG_NO_JUMIN.substring(0,2);
        			}else{
        				nPayYear = "20" + ORG_NO_JUMIN.substring(0,2);
        			}

        			nPayYear = (parseInt(nPayYear) + 65) + ORG_NO_JUMIN.substring(2,4) + "31"  //만 65세 생일 다음

        			if(nPayYear < DT_IPSA){
        				this.gfnAlert("만 65세 이후 고용된 근로자는 고용보험 공제대상이 아닙니다.");
        				return false;
        			}

        		}
        	}

        	return true;
        };

        // 싱글 폼 데이터 변경시 코드파인더나 콤보박스 값을 변경해도 저장 버튼이 활성화처리 되도록함
        this.dsListSub_oncolumnchanged = function(obj,e)
        {
        	this.gfnSetFormStatus(this, "U");
        };

        this.dsListSub_onvaluechanged = function(obj,e)
        {

        	if(e.newvalue != e.oldvalue){

        		if(e.columnid == "YN_GOYONG"){
        			// 고용보험
        			var sYN_GOYONG = this.gfnNvl(this.dsListSub.getColumn(0, "YN_GOYONG"),"N");
        			if(sYN_GOYONG == "Y"){
        				;
        			}else{
        				;
        			}
        		}
        		else if(e.columnid == "YN_RETIRE"){
        			// 퇴직공제
        			var sYN_RETIRE = this.gfnNvl(this.dsListSub.getColumn(0, "YN_RETIRE"),"N");
        			if(sYN_RETIRE == "Y"){
        				;
        			}else if(sYN_RETIRE == "N"){
        				if(!this.gfnIsNull(this.dsListSub.getColumn(0, "RETIRE_MIGAIP"))){
        					this.dsListSub.setColumn(0, "RETIRE_MIGAIP", "");
        					//this.gfnSetFormStatus(this, "U");
        				}
        				if(!this.gfnIsNull(this.dsListSub.getColumn(0, "NO_RETIRE"))){
        					this.dsListSub.setColumn(0, "NO_RETIRE", "");
        					//this.gfnSetFormStatus(this, "U");
        				}
        			}
        		}
        		else if(e.columnid == "YN_MEDICARE"){
        			// 건강보험
        			var sYN_MEDICARE = this.gfnNvl(this.dsListSub.getColumn(0, "YN_MEDICARE"),"N");
        			if(sYN_MEDICARE == "N"){
        				this.divData.form.divDataRight.form.txtAM_MEDICARE.set_value("");
        			}
        			this.fnSetControl("YN_MEDICARE");
        		}
        		else if(e.columnid == "YN_KOOKMIN"){
        			// 국민연금
        			var sYN_KOOKMIN = this.gfnNvl(this.dsListSub.getColumn(0, "YN_KOOKMIN"),"N");

        			if(sYN_KOOKMIN == "Y"){
        				var sTY_PAY = this.gfnNvl(this.dsListSub.getColumn(0, "TY_PAY"),"");
        				if(sTY_PAY == "M"){ //월급
        					var nAM_WOLGUB = this.gfnNvl(this.dsListSub.getColumn(0, "AM_WOLGUB"), 0);
        					this.dsListSub.setColumn(0, "AM_MONAVG_ANNUITY", nAM_WOLGUB);
        				}
        			}else{
        				this.divData.form.divDataRight.form.txtAM_KOOKMIN.set_value("");
        			}
        			this.fnSetControl("YN_KOOKMIN");
        		}
        		else if(e.columnid == "TY_PAY"){
        			//급여구분
        			// D	일당제
        			// M	월급제
        			var sTY_PAY = this.gfnNvl(this.dsListSub.getColumn(0, "TY_PAY"),"");
        			if(sTY_PAY == "D"){
        				this.divData.form.divDataRight.form.txtAM_WOLGUB.set_value("");
        			}
        			else if(sTY_PAY == "M"){
        				this.divData.form.divDataRight.form.txtAM_ILGUB.set_value("");
        			}
        			this.fnSetControl("TY_PAY");
        		}
        		else if(e.columnid == "TY_JIGUB"){
        			//지급처구분
        			// P	개인
        			// Y	거래처
        			var sTY_JIGUB = this.gfnNvl(this.dsListSub.getColumn(0, "TY_JIGUB"),"");
        			if(sTY_JIGUB == "P"){ //개인
        				this.divData.form.divDataRight.form.cfCD_VENDOR.form.fnCodeFindClear();
        				this.divData.form.divDataRight.form.cfCD_VENDOR_ACCOUNT.form.fnCodeFindClear();
        			}
        			else if(sTY_JIGUB == "V"){ //거래처
        				this.divData.form.divDataRight.form.cfCD_BANK.form.fnCodeFindClear();
        				this.divData.form.divDataRight.form.txtNO_ACCOUNT.set_value("");
        				this.divData.form.divDataRight.form.txtNM_OPENER.set_value("");
        			}
        			this.fnSetControl("TY_JIGUB");
        		}
        		else if(e.columnid == "TY_WOIGUG"){
        			//내/외국인구분
        			var sTY_WOIGUG = this.gfnNvl(this.dsListSub.getColumn(0, "TY_WOIGUG"),"");
        			if(sTY_WOIGUG == "Y"){ //외국인
        				;
        			}else{ //내국인
        				this.divData.form.divDataRight.form.cfCD_COUNTRY.form.fnCodeFindClear();
        			}
        			this.fnSetControl("TY_WOIGUG");
        		}
        		else if(e.columnid == "RT_GUNRO"){
        			//근로내역확인 신고여부
        			var sRT_GUNRO = this.gfnNvl(this.dsListSub.getColumn(0, "RT_GUNRO"),"N");
        			this.divData.form.divDataRight.form.cfCD_SINGO_JIKJONG.form.fnCodeFindClear();
        			if(sRT_GUNRO == "Y"){
        				//체크
        				this.divData.form.divDataRight.form.cfCD_SINGO_JIKJONG.set_enable(true);
        			}else if(sRT_GUNRO == "N"){
        				//체크해제
        				this.divData.form.divDataRight.form.cfCD_SINGO_JIKJONG.set_enable(false);
        			}
        			this.fnSetControl("RT_GUNRO");
        		}
        	}
        };

        this.fnSetControl = function(columnid){
        	if(columnid == "YN_MEDICARE"){
        		var sYN_MEDICARE = this.dsListSub.getColumn(0, "YN_MEDICARE");
        		if(sYN_MEDICARE == "Y"){
        			this.divData.form.divDataRight.form.txtAM_MEDICARE.set_enable(true);
        		}else{
        			this.divData.form.divDataRight.form.txtAM_MEDICARE.set_enable(false);
        		}
        	}
        	if(columnid == "YN_KOOKMIN"){
        		var sYN_KOOKMIN = this.dsListSub.getColumn(0, "YN_KOOKMIN");
        		if(sYN_KOOKMIN == "Y"){
        			this.divData.form.divDataRight.form.txtAM_KOOKMIN.set_enable(true);
        		}else{
        			this.divData.form.divDataRight.form.txtAM_KOOKMIN.set_enable(false);
        		}
        	}
        	if(columnid == "TY_PAY"){
        		var sTY_PAY = this.gfnNvl(this.dsListSub.getColumn(0, "TY_PAY"),"");
        		this.divData.form.divDataRight.form.txtAM_ILGUB.set_enable(false);
        		this.divData.form.divDataRight.form.txtAM_WOLGUB.set_enable(false);
        		if(sTY_PAY == "D"){
        			this.divData.form.divDataRight.form.txtAM_ILGUB.set_enable(true);
        		}
        		else{
        			this.divData.form.divDataRight.form.txtAM_WOLGUB.set_enable(true);
        		}
        	}
        	if(columnid == "TY_JIGUB"){
        		var sTY_JIGUB = this.gfnNvl(this.dsListSub.getColumn(0, "TY_JIGUB"),"");
        		this.divData.form.divDataRight.form.cfCD_BANK.set_enable(false);
        		this.divData.form.divDataRight.form.txtNO_ACCOUNT.set_enable(false);
        		this.divData.form.divDataRight.form.txtNM_OPENER.set_enable(false);
        		this.divData.form.divDataRight.form.cfCD_VENDOR.set_enable(false);
        		this.divData.form.divDataRight.form.cfCD_VENDOR_ACCOUNT.set_enable(false);
        		if(sTY_JIGUB == "P"){ //개인
        			this.divData.form.divDataRight.form.cfCD_BANK.set_enable(true);
        			this.divData.form.divDataRight.form.txtNO_ACCOUNT.set_enable(true);
        			this.divData.form.divDataRight.form.txtNM_OPENER.set_enable(true);
        		}
        		else{ //거래처
        			this.divData.form.divDataRight.form.cfCD_VENDOR.set_enable(true);
        			this.divData.form.divDataRight.form.cfCD_VENDOR_ACCOUNT.set_enable(true);
        		}
        	}
        	if(columnid == "TY_WOIGUG"){
        		var sTY_WOIGUG = this.gfnNvl(this.dsListSub.getColumn(0, "TY_WOIGUG"),"");
        		if(sTY_WOIGUG == "Y"){ //외국인
        			this.divData.form.divDataRight.form.cfCD_COUNTRY.set_enable(true);
        		}else{ //내국인
        			this.divData.form.divDataRight.form.cfCD_COUNTRY.set_enable(false);
        		}
        	}
        	if(columnid == "RT_GUNRO"){
        		//근로내역확인 신고여부
        		var sRT_GUNRO = this.gfnNvl(this.dsListSub.getColumn(0, "RT_GUNRO"),"N");
        		if(sRT_GUNRO == "Y"){
        			this.divData.form.divDataRight.form.cfCD_SINGO_JIKJONG.set_enable(true);
        		}else{
        			this.divData.form.divDataRight.form.cfCD_SINGO_JIKJONG.set_enable(false);
        		}
        	}
        }

        // 컴포넌트 활성 or 비활성화 처리(값 직접 변경시 실행)
        this.fnEnableGuBun = function()
        {
        	var arr = new Array();
        	arr.push("YN_MEDICARE");
        	arr.push("YN_KOOKMIN");
        	arr.push("TY_PAY");
        	arr.push("TY_JIGUB");
        	arr.push("TY_WOIGUG");
        	arr.push("RT_GUNRO");

        	for(var i=0;i<arr.length;i++){
        		var columnid = arr[i];
        		this.fnSetControl(columnid);
        	}

        //trace("11111==>", this.gfnGetFlag(this.dsList, this.dsList.rowposition));

        	if(this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I"){
        		this.divData.form.divDataRight.form.tclDT_START.set_enable(true);
        		this.divData.form.divDataRight.form.tclDT_END.set_enable(true);
        		this.divData.form.divDataRight.form.tclDT_IPSA.set_enable(true);

        		this.divData.form.divDataRight.form.txtDS_NAME.set_enable(true);
        		this.divData.form.divDataRight.form.txtNO_JUMIN.set_enable(true);
        	}else{
        		this.divData.form.divDataRight.form.tclDT_START.set_enable(false);
        		this.divData.form.divDataRight.form.tclDT_END.set_enable(false);
        		this.divData.form.divDataRight.form.tclDT_IPSA.set_enable(false);

        		this.divData.form.divDataRight.form.txtDS_NAME.set_enable(false);
        		this.divData.form.divDataRight.form.txtNO_JUMIN.set_enable(false);
        	}
        };

        // 이력 버튼
        this.Button_onclick = function(obj,e)
        {
        //
        // var param = {};
        // 	param.CD_SITE = this.dsSearch.getColumn(0,"CD_SITE");
        // 	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        // 	param.NO_ID = this.dsList.getColumn(this.dsList.rowposition, "NO_JUMIN");
        // 	param.ORG_NO_JUMIN = this.dsList.getColumn(this.dsList.rowposition, "ORG_NO_JUMIN");
        // 	param.DS_NAME = this.dsList.getColumn(this.dsList.rowposition, "DS_NAME");
        //     param.NO_ID_REAL = this.dsList.getColumn(this.dsList.rowposition, "NO_ID");
        // 	param.DT_IPSA = this.dsListSub.getColumn(0, "DT_IPSA");
        // 	param.REG_GUBUN = this.gfnGetFlag(this.dsList, this.dsList.rowposition);
        // //	param.TY_GUBUN = obj.initvalueid;
        //
        // 	this.gfnFormOpen("DSA", "DSA_INSU_USER", "fnHistoryDialogCallback", param, 880, 630);
        };

        // 일급변경이벤트.
        this.divData_divDataRight_txtAM_ILGUB_onchanged = function(obj,e)
        {
        // 	trace("## divData_divDataRight_txtAM_ILGUB_onchanged ##");
        // 	var TY_CHAIYONG = this.dsListSub.getColumn(0, "TY_CHAIYONG");
        // 	var CT_PROJECT_DAY = this.dsListSub.getColumn(0, "CT_PROJECT_DAY");
        // 	var AM_SIGUB = this.dsListSub.getColumn(0, "AM_SIGUB");
        // 	var AM_PROJECT_PAY = 0;
        //
        // 	//단시간:CM005002001, 5일이상:CM005002003, 5일미만:CM005002002
        // 	if(this.gfnTrim(TY_CHAIYONG) == "CM005002001")
        // 	{
        // 		if(24 < e.postvalue)
        // 		{
        // 			this.gfnAlert("근무시간은 24시간을 넘을 수 없습니다.");
        // 			obj.set_value(0);
        //
        // 		}
        // 		else
        // 		{
        // 			var hoaddtime   = 0;//휴일할증시간.
        // 			var addWorktime = 0;
        // 			var fulltimeday = 24;//만근기준
        // 			var exphour = 0;
        //
        // 			if(CT_PROJECT_DAY >= fulltimeday){//예상출역일수가 만근기준시간보다 클때.
        // 				addWorktime = e.postvalue;
        // 			}
        // 			exphour= (CT_PROJECT_DAY + Math.floor(CT_PROJECT_DAY / 7) * hoaddtime + Math.floor( (CT_PROJECT_DAY - Math.floor(CT_PROJECT_DAY / 7))/ 6 ) * hoaddtime + Math.floor(CT_PROJECT_DAY / 7)) * e.postvalue + addWorktime;
        // 			if ( ( exphour==0 ) || (AM_SIGUB == 0 )  ){
        // 			   AM_PROJECT_PAY = 0;
        // 			}else{
        // 			   AM_PROJECT_PAY = exphour * AM_SIGUB;
        // 			}
        //
        // 			this.dsListSub.setColumn(0, "AM_WOLGUB", Math.floor(AM_PROJECT_PAY / 10) * 10);
        // 		}
        //
        // 	}
        // 	else
        // 	{
        // 		// 시급계산 로직
        // 		if(CT_PROJECT_DAY < 5)
        // 		{
        // 			//AM_SIGUB = Math.floor((e.postvalue / 9.5) / 10) * 10;
        // 			AM_SIGUB = Math.floor((e.postvalue / 8) / 10) * 10;
        // 		}
        // 		else if(CT_PROJECT_DAY >= 5)
        // 		{
        // 			//AM_SIGUB = Math.round((e.postvalue * 28 / 340) / 10) * 10 ;
        // 			AM_SIGUB = Math.floor((e.postvalue / 8) / 10) * 10;
        // 		}
        //
        // 		AM_PROJECT_PAY = (AM_SIGUB * 8) * CT_PROJECT_DAY;
        // 		this.dsListSub.setColumn(0, "AM_SIGUB", AM_SIGUB);
        // 		this.dsListSub.setColumn(0, "AM_WOLGUB", e.postvalue * CT_PROJECT_DAY);
        // 	}
        // 	this.dsListSub.setColumn(0, "AM_PROJECT_PAY", AM_PROJECT_PAY);
        };

        // // 시급변경 이벤트.
        // this.divData_divDataRight_txtAM_SIGUB_onchanged = function(obj:nexacro.MaskEdit,e:nexacro.ChangeEventInfo)
        // {
        // 	trace("## divData_divDataRight_txtAM_SIGUB_onchanged ##");
        // 	var TY_CHAIYONG = this.dsListSub.getColumn(0, "TY_CHAIYONG");
        // 	var CT_PROJECT_DAY = this.dsListSub.getColumn(0, "CT_PROJECT_DAY");
        // 	var AM_ILGUB = this.dsListSub.getColumn(0, "AM_ILGUB");
        // 	var AM_SIGUB = e.postvalue
        //
        // 	// 단시간이 아닐때.
        // 	if(this.gfnTrim(TY_CHAIYONG) != "CM005002001")
        // 	{
        // 		var CT_PROJECT_DAY = this.dsListSub.getColumn(0, "CT_PROJECT_DAY");
        // 		this.dsListSub.setColumn(0, "AM_PROJECT_PAY", (e.postvalue * 8) * CT_PROJECT_DAY);
        // 	}
        // 	else
        // 	{
        // 		var hoaddtime   = 0;//휴일할증시간.
        // 		var addWorktime = 0;
        // 		var fulltimeday = 24;//만근기준
        // 		var exphour = 0;
        //
        // 		if(CT_PROJECT_DAY >= fulltimeday){//예상출역일수가 만근기준시간보다 클때.
        // 			addWorktime = AM_ILGUB;
        // 		}
        // 		exphour= (CT_PROJECT_DAY + Math.floor(CT_PROJECT_DAY / 7) * hoaddtime + Math.floor( (CT_PROJECT_DAY - Math.floor(CT_PROJECT_DAY / 7))/ 6 ) * hoaddtime + Math.floor(CT_PROJECT_DAY / 7)) * nexacro.toNumber(AM_ILGUB)  + nexacro.toNumber(addWorktime);
        // 		if ( ( exphour==0 ) || (AM_SIGUB == 0 )  ){
        // 		   AM_PROJECT_PAY = 0;
        // 		}else{
        // 		   AM_PROJECT_PAY = exphour * AM_SIGUB;
        // 		}
        //
        // 		this.dsListSub.setColumn(0, "AM_WOLGUB", Math.floor(AM_PROJECT_PAY / 10) * 10);
        // 		this.dsListSub.setColumn(0, "AM_PROJECT_PAY", Math.floor(AM_PROJECT_PAY / 10) * 10);
        // 	}
        //
        // };

        // 예상출역일수 변경이벤트.
        // this.divData_divDataRight_txtCT_PROJECT_DAY_onchanged = function(obj:nexacro.MaskEdit,e:nexacro.ChangeEventInfo)
        // {
        // 	trace("## divData_divDataRight_txtCT_PROJECT_DAY_onchanged ##");
        // 	var TY_CHAIYONG = this.dsListSub.getColumn(0, "TY_CHAIYONG");
        // 	var CT_PROJECT_DAY = nexacro.toNumber(e.postvalue);
        //
        // 	var AM_ILGUB = this.dsListSub.getColumn(0, "AM_ILGUB");
        // 	//var AM_SIGUB = 0;
        // 	var AM_SIGUB = this.dsListSub.getColumn(0, "AM_SIGUB");
        //
        // 	//단시간:CM005002001, 5일이상:CM005002003, 5일미만:CM005002002
        // 	if(this.gfnTrim(TY_CHAIYONG) == "CM005002003")
        // 	{
        // 		if(5 > e.postvalue)
        // 		{
        // 			CT_PROJECT_DAY = 5;
        // 		}
        // 		else if(31 < e.postvalue)
        // 		{
        // 			CT_PROJECT_DAY = 31;
        // 		}
        // 	}
        // 	else if(this.gfnTrim(TY_CHAIYONG) == "CM005002002")
        // 	{
        // 		if(4 < e.postvalue)
        // 		{
        // 			CT_PROJECT_DAY = 4;
        // 		}
        // 	}
        //
        // 	// 처리된 예상출역일수 세팅.
        // 	obj.set_value(CT_PROJECT_DAY);
        //
        // 	// 단시간이 아닐때.
        // 	if(this.gfnTrim(TY_CHAIYONG) != "CM005002001")
        // 	{
        // 		// 시급계산 로직
        // 		if(CT_PROJECT_DAY < 5)
        // 		{
        // 			//AM_SIGUB = Math.floor((e.postvalue / 9.5) / 10) * 10;
        // 			AM_SIGUB = Math.floor((AM_ILGUB / 8) / 10) * 10;
        // 		}
        // 		else if(CT_PROJECT_DAY >= 5)
        // 		{
        // 			//AM_SIGUB = Math.round((e.postvalue * 28 / 340) / 10) * 10 ;
        // 			AM_SIGUB = Math.floor((AM_ILGUB / 8) / 10) * 10;
        // 		}
        //
        // 		this.dsListSub.setColumn(0, "AM_SIGUB", AM_SIGUB);
        // 		this.dsListSub.setColumn(0, "AM_WOLGUB", CT_PROJECT_DAY * AM_ILGUB);
        // 		this.dsListSub.setColumn(0, "AM_PROJECT_PAY", (AM_SIGUB * 8) * CT_PROJECT_DAY);
        // 	}else{
        //
        // 		var hoaddtime   = 0;//휴일할증시간.
        // 		var addWorktime = 0;
        // 		var fulltimeday = 24;//만근기준
        // 		var exphour = 0;
        //
        // 		if(CT_PROJECT_DAY >= fulltimeday){//예상출역일수가 만근기준시간보다 클때.
        // 			addWorktime = AM_ILGUB;
        // 		}
        // 		exphour= (CT_PROJECT_DAY + Math.floor(CT_PROJECT_DAY / 7) * hoaddtime + Math.floor( (CT_PROJECT_DAY - Math.floor(CT_PROJECT_DAY / 7))/ 6 ) * hoaddtime + Math.floor(CT_PROJECT_DAY / 7)) * nexacro.toNumber(AM_ILGUB)  + nexacro.toNumber(addWorktime);
        // 		if ( ( exphour==0 ) || (AM_SIGUB == 0 )  ){
        // 		   AM_PROJECT_PAY = 0;
        // 		}else{
        // 		   AM_PROJECT_PAY = exphour * AM_SIGUB;
        // 		}
        //
        // 		this.dsListSub.setColumn(0, "AM_WOLGUB", Math.floor(AM_PROJECT_PAY / 10) * 10);
        // 		this.dsListSub.setColumn(0, "AM_PROJECT_PAY", Math.floor(AM_PROJECT_PAY / 10) * 10);
        // 	}
        //};


        this.fnEmployeeCopy = function(){
        //
        // 	// 입력방식 설정.
        // 	this.updateGubun = "C";
        //
        // 	// 복사 후 초기화 데이터 가공.
        // 	this.dsListSub.setColumn(0, "DT_IPSA", "");	// 입사일자
        // 	this.dsListSub.setColumn(0, "DT_TOIJIK", "");	// 퇴사일자
        // 	this.dsListSub.setColumn(0, "YN_GOYONG", 0);	// 고용보험
        // 	// 국민연금
        // 	this.dsListSub.setColumn(0, "YN_KOOKMIN", 0);
        // 	this.dsListSub.setColumn(0, "AM_KOOKMIN", 0);
        // 	// 건강보험
        // 	this.dsListSub.setColumn(0, "YN_MEDICARE", 0);
        // 	this.dsListSub.setColumn(0, "AM_MEDICARE", 0);
        // 	// 장기요양보험
        // 	this.dsListSub.setColumn(0, "YN_SILVER", "0");
        // 	this.dsListSub.setColumn(0, "AM_SILVER", "0");
        //
        // 	// 파일정보 초기화.
        // 	this.dsListSub.setColumn(0, "GF_NM_FILE", "");
        // 	this.dsListSub.setColumn(0, "GF_NO_SEQ", "");
        // 	this.dsListSub.setColumn(0, "GF_DS_ETC", "");
        // 	this.dsListSub.setColumn(0, "RF_NM_FILE", "");
        // 	this.dsListSub.setColumn(0, "RF_NO_SEQ", "");
        // 	this.dsListSub.setColumn(0, "RF_DS_ETC", "");
        // 	this.dsListSub.setColumn(0, "FF_NM_FILE", "");
        // 	this.dsListSub.setColumn(0, "FF_NO_SEQ", "");
        // 	this.dsListSub.setColumn(0, "FF_DS_ETC", "");
        //
        // // 	this.fileUpTransfer.clearFileList();
        // // 	this.fileUpTransfer2.clearFileList();
        // // 	this.fileUpTransfer3.clearFileList();
        // // 	this.fileUpTransfer.clearPostDataList();
        // // 	this.fileUpTransfer2.clearPostDataList();
        // // 	this.fileUpTransfer3.clearPostDataList();
        //
        // 	this.dsListSub.setColumn(0, "NO_SEQ", nexacro.toNumber(this.dsListSub.getColumn(0, "NO_SEQ")) + 1);
        //
        // 	this.divData.form.divDataRight.form.cboTY_CHAIYONG.set_readonly(false);
        // 	this.divData.form.divDataRight.form.txtAM_ILGUB.set_readonly(false);
        // 	//this.divData.form.divDataRight.form.txtAM_SIGUB.set_readonly(false);
        // 	this.divData.form.divDataRight.form.txtCT_PROJECT_DAY.set_readonly(false);

        }

        // 입사일자 변경시 건강검진일자 동일하게 세팅.
        this.divData_divDataRight_tclDT_IPSA_onchanged = function(obj,e)
        {
        	//this.divData.form.divDataRight.form.tclDT_CHECKUP.set_value(e.postvalue);
        };

        this.divData_divDataRight_cboTY_CHAIYONG_canitemchange = function(obj,e)
        {
        // 	// 채용구분변경시 급여관련 초기화.
        // 	this.dsListSub.setColumn(0, "AM_ILGUB", 0);
        // 	this.dsListSub.setColumn(0, "AM_SIGUB", 0);
        // 	this.dsListSub.setColumn(0, "AM_WOLGUB", 0);
        // 	this.dsListSub.setColumn(0, "AM_PROJECT_PAY", 0);
        //
        // 	//단시간:CM005002001, 5일이상:CM005002003, 5일미만:CM005002002
        // 	if(this.gfnTrim(e.postvalue) == "CM005002001")
        // 	{
        // 		this.divData.form.divDataRight.form.staAM_ILGUB.set_text("근무시간");
        // 	}
        // 	else
        // 	{
        // 		this.divData.form.divDataRight.form.staAM_ILGUB.set_text("일급");
        // 		if(this.gfnTrim(e.postvalue) == "CM005002003"){
        // 			this.dsListSub.setColumn(0, "CT_PROJECT_DAY", 5);
        // 		}else if(this.gfnTrim(e.postvalue) == "CM005002002"){
        // 			this.dsListSub.setColumn(0, "CT_PROJECT_DAY", 0);
        // 		}
        // 	}
        };

        // this.SearchInsuUser = function() {
        //
        // 	this.dsSelectInsuUser.addRow();
        // 	this.dsSelectInsuUser.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        // 	this.dsSelectInsuUser.setColumn(0, "ORG_NO_JUMIN", this.dsList.getColumn(this.dsList.rowposition, "ORG_NO_JUMIN"));
        //
        // 	var strSvcId    = "selectInsuUser";
        // 	var strSvcType  = "grid";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "insuUserTempSelect=dsSelectInsuUser";
        // 	var outData     = "dsInsuUserRst=insuUserTempSelect0";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        // }

         /*
          *	파일경로 조회 버튼
          */
        this.fnSearchFileInfo = function(flag) {
        	var inData      = "";
        	var outData     = "";
        	if(flag == "DS04"){	// 근로계약서
        		this.dsFile.clearData();
        		var nRow = this.dsFile.addRow();
        		this.dsFile.setColumn(nRow, "CD_GUBUN", flag);	// 근로계약서
        		inData      = "info=dsFile";
        		outData     = "dsFile=info0";
        	}
        	if(flag == "DS07"){	// 사직서
        		this.dsFile2.clearData();
        		var nRow = this.dsFile2.addRow();
        		this.dsFile2.setColumn(nRow, "CD_GUBUN", flag);
        		inData      = "info=dsFile2";
        		outData     = "dsFile2=info0";
        	}
        	if(flag == "DS05"){	// 외국인등록증
        		this.dsFile3.clearData();
        		var nRow = this.dsFile3.addRow();
        		this.dsFile3.setColumn(nRow, "CD_GUBUN", flag);
        		inData      = "info=dsFile3";
        		outData     = "dsFile3=info0";
        	}

        	var strSvcId    = "fileInfo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc, false);
        };

        // 근로계약서 첨부 버튼 이벤트.
        this.divData_divDataRight_btnGUNRO_ATTCHFILE_onclick = function(obj,e)
        {
        	this.fnSetFileDialog("GF");
        };

        // 사직서 첨부 버튼 이벤트
        this.divData_divDataRight_btnRETIRE_ATTCHFILE_onclick = function(obj,e)
        {
        	this.fnSetFileDialog("RF");
        };

        // 외국인등록증 첨부 버튼 이벤트
        this.divData_divDataRight_btnFOR_ATTCHFILE_onclick = function(obj,e)
        {
        	this.fnSetFileDialog("FF");
        };

        this.fnSetFileDialog = function(fileFlag){
        	if(fileFlag == "GF"){
        		this.fileDialog.set_filter("Text Files(*.html)|*.html|" );
        		this.fileDialog.open( "FileSave", FileDialog.SAVE, "%UserApp%" );
        	}else if(fileFlag == "RF"){
        		this.fileDialog2.set_filter("Text Files(*.html)|*.html|" );
        		this.fileDialog2.open( "FileSave", FileDialog.SAVE, "%UserApp%" );
        	}else if(fileFlag == "FF"){
        		this.fileDialog3.set_filter("Text Files(*.html)|*.html|" );
        		this.fileDialog3.open( "FileSave", FileDialog.SAVE, "%UserApp%" );
        	}
        };

        this.fileDialog_onclose = function(obj,e)
        {
        	var file = e.virtualfiles[0];

        	var NEW_NM_FILE = file.filename;

        	this.fileUpTransfer.clearFileList();
        	this.fileUpTransfer.clearPostDataList();

        	this.dsRemove.clearData();

        	var extnIdx = NEW_NM_FILE.lastIndexOf(".");

        	var extn = this.gfnRight(NEW_NM_FILE, NEW_NM_FILE.length - extnIdx).replace(".", "").toLowerCase();


        	var allowTypes = this.fileConfig.allowTypes;


        	if (allowTypes != null && allowTypes.indexOf(extn) > -1)
        	{
        		this.fileUpTransfer.addFile("file", file);
        		this.fileUpTransfer.setPostData("path", NEW_DS_PATH);
        		this.fileUpTransfer.setPostData("fileName", NEW_NM_FILE);

        		if (this.gfnGetFlag(this.dsList, this.dsList.rowposition) != "I")
        		{
        			var NEW_DS_PATH = this.dsFile.getColumn(this.dsFile.rowposition, "DS_PATH") + this.dsListSub.getColumn(0, "NO_ID") + "/" + this.dsListSub.getColumn(0, "NO_SEQ");
        			this.fileUpTransfer.setPostData("path", NEW_DS_PATH);

        			var OLD_NM_FILE = this.dsListSub.getColumn(this.dsListSub.rowposition, "GF_NM_FILE");
        			var OLD_DS_PATH = this.dsListSub.getColumn(this.dsListSub.rowposition, "GF_DS_PATH");

        			if(!this.gfnIsNull(OLD_NM_FILE) && !this.gfnIsNull(OLD_DS_PATH))
        			{
        				this.dsRemove.addRow();
        				this.dsRemove.setColumn(0, "filename", OLD_NM_FILE);
        				this.dsRemove.setColumn(0, "filepath", OLD_DS_PATH);
        				this.fnRemoveFile();
        			}
        		}
        		else
        		{
        			//this.fileUpTransfer.upload(this.fileConfig.uploadUrl);
        		}

        		this.dsListSub.setColumn(0, "GF_NM_FILE", NEW_NM_FILE);
        		this.dsListSub.setColumn(0, "GF_DS_ETC", NEW_NM_FILE);
        	}
        	else
        	{
        		this.gfnAlert("결재 양식파일은 html 파일 이어야 합니다.");
        	}
        };


        this.fileDialog2_onclose = function(obj,e)
        {
        	var file = e.virtualfiles[0];
        	var NEW_NM_FILE = file.filename;

        	this.fileUpTransfer2.clearFileList();
        	this.fileUpTransfer2.clearPostDataList();

        	this.dsRemove2.clearData();

        	var extnIdx = NEW_NM_FILE.lastIndexOf(".");

        	var extn = this.gfnRight(NEW_NM_FILE, NEW_NM_FILE.length - extnIdx).replace(".", "").toLowerCase();

        	var allowTypes = this.fileConfig.allowTypes;
        	if (allowTypes != null && allowTypes.indexOf(extn) > -1)
        	{
        		this.fileUpTransfer2.addFile("file", file);
        		this.fileUpTransfer2.setPostData("fileName", NEW_NM_FILE);

        		if (this.gfnGetFlag(this.dsList, this.dsList.rowposition) != "I")
        		{
        			var NEW_DS_PATH = this.dsFile2.getColumn(this.dsFile2.rowposition, "DS_PATH") + this.dsListSub.getColumn(0, "NO_ID") + "/" + this.dsListSub.getColumn(0, "NO_SEQ");
        			this.fileUpTransfer2.setPostData("path", NEW_DS_PATH);

        			var OLD_NM_FILE = this.dsListSub.getColumn(this.dsListSub.rowposition, "RF_NM_FILE");
        			var OLD_DS_PATH = this.dsListSub.getColumn(this.dsListSub.rowposition, "RF_DS_PATH");

        // 			this.dsRemove2.setColumn(0, "filename", OLD_NM_FILE);
        // 			this.dsRemove2.setColumn(0, "filepath", OLD_DS_PATH);
        // 			this.fnRemoveFile2();

        			if(!this.gfnIsNull(OLD_NM_FILE) && !this.gfnIsNull(OLD_DS_PATH))
        			{
        				this.dsRemove2.addRow();
        				this.dsRemove2.setColumn(0, "filename", OLD_NM_FILE);
        				this.dsRemove2.setColumn(0, "filepath", OLD_DS_PATH);
        				this.fnRemoveFile2();
        			}
        		}
        		else
        		{
        			//this.fileUpTransfer2.upload(this.fileConfig.uploadUrl);
        		}

        		this.dsListSub.setColumn(0, "RF_NM_FILE", NEW_NM_FILE);
        		this.dsListSub.setColumn(0, "RF_DS_ETC", NEW_NM_FILE);
        	}
        	else
        	{
        		this.gfnAlert("결재 양식파일은 html 파일 이어야 합니다.");
        	}
        };

        this.fileDialog3_onclose = function(obj,e)
        {
        	var file = e.virtualfiles[0];
        	var NEW_NM_FILE = file.filename;

        	this.fileUpTransfer3.clearFileList();
        	this.fileUpTransfer3.clearPostDataList();

        	this.dsRemove3.clearData();

        	var extnIdx = NEW_NM_FILE.lastIndexOf(".");

        	var extn = this.gfnRight(NEW_NM_FILE, NEW_NM_FILE.length - extnIdx).replace(".", "").toLowerCase();

        	var allowTypes = this.fileConfig.allowTypes;
        	if (allowTypes != null && allowTypes.indexOf(extn) > -1)
        	{
        		this.fileUpTransfer3.addFile("file", file);
        		this.fileUpTransfer3.setPostData("fileName", NEW_NM_FILE);

        		if (this.gfnGetFlag(this.dsList, this.dsList.rowposition) != "I")
        		{
        			var NEW_DS_PATH = this.dsFile3.getColumn(this.dsFile3.rowposition, "DS_PATH") + this.dsListSub.getColumn(0, "NO_ID") + "/" + this.dsListSub.getColumn(0, "NO_SEQ");
        			this.fileUpTransfer3.setPostData("path", NEW_DS_PATH);

        			var OLD_NM_FILE = this.dsListSub.getColumn(this.dsListSub.rowposition, "FF_NM_FILE");
        			var OLD_DS_PATH = this.dsListSub.getColumn(this.dsListSub.rowposition, "FF_DS_PATH");

        // 			this.dsRemove3.setColumn(0, "filename", OLD_NM_FILE);
        // 			this.dsRemove3.setColumn(0, "filepath", OLD_DS_PATH);
        // 			this.fnRemoveFile3();

        			if(!this.gfnIsNull(OLD_NM_FILE) && !this.gfnIsNull(OLD_DS_PATH))
        			{
        				this.dsRemove3.addRow();
        				this.dsRemove3.setColumn(0, "filename", OLD_NM_FILE);
        				this.dsRemove3.setColumn(0, "filepath", OLD_DS_PATH);
        				this.fnRemoveFile3();
        			}
        		}
        		else
        		{
        			//this.fileUpTransfer3.upload(this.fileConfig.uploadUrl);
        		}

        		this.dsListSub.setColumn(0, "FF_NM_FILE", NEW_NM_FILE);
        		this.dsListSub.setColumn(0, "FF_DS_ETC", NEW_NM_FILE);
        	}
        	else
        	{
        		this.gfnAlert("결재 양식파일은 html 파일 이어야 합니다.");
        	}
        };

        this.fileUpTransfer_onsuccess = function(obj,e)
        {
        	if(e.code == 0)
        	{
        		if(e.datasets.length > 0)
        		{
        			this.dsSave.clearData();

        			var gdsUserInfo = this.gfnGetApplication().gdsUserInfo;
        			var GF_NO_SEQ = this.dsListSub.getColumn(this.dsListSub.rowposition, "GF_NO_SEQ");

        //			var NO_ID = this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I" ? (this.gfnIsNull(this.dsRtnData.getColumn(0, "RTN_NO_ID")) ? this.timeValue : this.dsRtnData.getColumn(0, "RTN_NO_ID")) : this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_ID");
        //			var NO_SEQ = this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I" ? 1 : this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_SEQ");
        			var NO_ID = this.gfnIsNull(this.dsListSub.getColumn(0, "NO_ID")) ? this.dsRtnData.getColumn(0, "RTN_NO_ID") : this.dsListSub.getColumn(0, "NO_ID");
        			var NO_SEQ = this.gfnIsNull(this.dsListSub.getColumn(0, "NO_SEQ")) ? 1 : this.dsListSub.getColumn(0, "NO_SEQ");
        			var CD_GUBUN = this.dsFile.getColumn(0, "CD_GUBUN");
        			var DS_PATH = this.dsFile.getColumn(0, "DS_PATH");
        			var DS_ETC = this.dsFile.getColumn(0, "DS_ETC");

        			var nRow = this.dsSave.addRow();
        			this.dsSave.setColumn(nRow, "TY_SAVE", "D");
        			this.dsSave.setColumn(nRow, "NO_SEQ", GF_NO_SEQ);

        			for(var i = 0; i < e.datasets[0].rowcount; i++) {
        				var sFileName = e.datasets[0].getColumn(i, "filename");
        				var iFileSize = e.datasets[0].getColumn(i, "filesize");
        				var dirExptType = sFileName.lastIndexOf(".")+1;
        				var sFileType = sFileName.substr(dirExptType);
        				//var sIconImage = this.getFileIcon(sFileName);

        				var nRow = this.dsSave.addRow();
        				this.dsSave.setColumn(nRow, "TY_SAVE", "I");
        				this.dsSave.setColumn(nRow, "NO_SEQ", 0);
        				this.dsSave.setColumn(nRow, "CD_GUBUN", CD_GUBUN);
        				this.dsSave.setColumn(nRow, "DS_PATH", DS_PATH + NO_ID + "/" + NO_SEQ);
        				this.dsSave.setColumn(nRow, "NM_FILE", sFileName);
        				this.dsSave.setColumn(nRow, "SZ_FILE", iFileSize);
        				//this.dsSave.setColumn(nRow, "DS_ETC", DS_ETC);
        				this.dsSave.setColumn(nRow, "DS_ETC", sFileName);
        				this.dsSave.setColumn(nRow, "CD_REF1", NO_ID);
        				this.dsSave.setColumn(nRow, "CD_REF2", NO_SEQ);
        				this.dsSave.setColumn(nRow, "CD_REF3", "");
        				this.dsSave.setColumn(nRow, "ID_INSERT", gdsUserInfo.getColumn(gdsUserInfo.rowposition, "ID_USER"));
        			}
        			this.fnSaveFile();
        		}
        	}
        };


        this.fileUpTransfer2_onsuccess = function(obj,e)
        {
        	if(e.code == 0)
        	{
        		if(e.datasets.length > 0)
        		{
        			this.dsSave2.clearData();

        			var gdsUserInfo = this.gfnGetApplication().gdsUserInfo;
        			var RF_NO_SEQ = this.dsListSub.getColumn(this.dsListSub.rowposition, "RF_NO_SEQ");

        			var NO_ID = this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I" ? (this.gfnIsNull(this.dsRtnData.getColumn(0, "RTN_NO_ID")) ? this.timeValue : this.dsRtnData.getColumn(0, "RTN_NO_ID")) : this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_ID");
        			var NO_SEQ = this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I" ? 1 : this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_SEQ");
        			var CD_GUBUN = this.dsFile2.getColumn(0, "CD_GUBUN");
        			var DS_PATH = this.dsFile2.getColumn(0, "DS_PATH");
        			var DS_ETC = this.dsFile2.getColumn(0, "DS_ETC");

        			var nRow = this.dsSave2.addRow();
        			this.dsSave2.setColumn(nRow, "TY_SAVE", "D");
        			this.dsSave2.setColumn(nRow, "NO_SEQ", RF_NO_SEQ);

        			for(var i = 0; i < e.datasets[0].rowcount; i++) {
        				var sFileName = e.datasets[0].getColumn(i, "filename");
        				var iFileSize = e.datasets[0].getColumn(i, "filesize");
        				var dirExptType = sFileName.lastIndexOf(".")+1;
        				var sFileType = sFileName.substr(dirExptType);
        				//var sIconImage = this.getFileIcon(sFileName);

        				var nRow = this.dsSave2.addRow();
        				this.dsSave2.setColumn(nRow, "TY_SAVE", "I");
        				this.dsSave2.setColumn(nRow, "NO_SEQ", 0);
        				this.dsSave2.setColumn(nRow, "CD_GUBUN", CD_GUBUN);
        				this.dsSave2.setColumn(nRow, "DS_PATH", DS_PATH + NO_ID + "/" + NO_SEQ);
        				this.dsSave2.setColumn(nRow, "NM_FILE", sFileName);
        				this.dsSave2.setColumn(nRow, "SZ_FILE", iFileSize);
        				//this.dsSave2.setColumn(nRow, "DS_ETC", DS_ETC);
        				this.dsSave2.setColumn(nRow, "DS_ETC", sFileName);
        				this.dsSave2.setColumn(nRow, "CD_REF1", NO_ID);
        				this.dsSave2.setColumn(nRow, "CD_REF2", NO_SEQ);
        				this.dsSave2.setColumn(nRow, "CD_REF3", "");
        				this.dsSave2.setColumn(nRow, "ID_INSERT", gdsUserInfo.getColumn(gdsUserInfo.rowposition, "ID_USER"));
        			}
        			this.fnSaveFile2();
        		}
        	}

        };

        this.fileUpTransfer3_onsuccess = function(obj,e)
        {

        	if(e.code == 0)
        	{
        		if(e.datasets.length > 0)
        		{
        			this.dsSave3.clearData();

        			var gdsUserInfo = this.gfnGetApplication().gdsUserInfo;
        			var FF_NO_SEQ = this.dsListSub.getColumn(this.dsListSub.rowposition, "FF_NO_SEQ");

        			var NO_ID = this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I" ? (this.gfnIsNull(this.dsRtnData.getColumn(0, "RTN_NO_ID")) ? this.timeValue : this.dsRtnData.getColumn(0, "RTN_NO_ID")) : this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_ID");
        			var NO_SEQ = this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I" ? 1 : this.dsListSub.getColumn(this.dsListSub.rowposition, "NO_SEQ");
        			var CD_GUBUN = this.dsFile3.getColumn(0, "CD_GUBUN");
        			var DS_PATH = this.dsFile3.getColumn(0, "DS_PATH");
        			var DS_ETC = this.dsFile3.getColumn(0, "DS_ETC");

        			var nRow = this.dsSave3.addRow();
        			this.dsSave3.setColumn(nRow, "TY_SAVE", "D");
        			this.dsSave3.setColumn(nRow, "NO_SEQ", FF_NO_SEQ);

        			for(var i = 0; i < e.datasets[0].rowcount; i++) {
        				var sFileName = e.datasets[0].getColumn(i, "filename");
        				var iFileSize = e.datasets[0].getColumn(i, "filesize");
        				var dirExptType = sFileName.lastIndexOf(".")+1;
        				var sFileType = sFileName.substr(dirExptType);
        				//var sIconImage = this.getFileIcon(sFileName);

        				var nRow = this.dsSave3.addRow();
        				this.dsSave3.setColumn(nRow, "TY_SAVE", "I");
        				this.dsSave3.setColumn(nRow, "NO_SEQ", 0);
        				this.dsSave3.setColumn(nRow, "CD_GUBUN", CD_GUBUN);
        				this.dsSave3.setColumn(nRow, "DS_PATH", DS_PATH + NO_ID + "/" + NO_SEQ);
        				this.dsSave3.setColumn(nRow, "NM_FILE", sFileName);
        				this.dsSave3.setColumn(nRow, "SZ_FILE", iFileSize);
        				//this.dsSave3.setColumn(nRow, "DS_ETC", DS_ETC);
        				this.dsSave3.setColumn(nRow, "DS_ETC", sFileName);
        				this.dsSave3.setColumn(nRow, "CD_REF1", NO_ID);
        				this.dsSave3.setColumn(nRow, "CD_REF2", NO_SEQ);
        				this.dsSave3.setColumn(nRow, "CD_REF3", "");
        				this.dsSave3.setColumn(nRow, "ID_INSERT", gdsUserInfo.getColumn(gdsUserInfo.rowposition, "ID_USER"));
        			}
        			this.fnSaveFile3();
        		}
        	}

        };

        //2021.05.28 add
        //DZZT_FILEMANAGER.NO_SEQ 구할때 dup 에러 나서 한꺼번에 보내는걸로 수정함
        this.fnSaveFileAll = function()
        {
        	if (this.dsSave.rowcount == 0 && this.dsSave2.rowcount == 0 && this.dsSave3.rowcount == 0) return;

        	var strSvcId    = "saveFile";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "upload=dsSave:A upload2=dsSave2:A upload3=dsSave3:A";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        this.fnSaveFile = function()
        {
        	this.fileCount = this.fileCount - 1;

        	trace("fnSaveFile", this.fileCount);

        	if(this.fileCount == 0){
        		trace("fnSaveFile", "CALL >> fnSaveFileAll");

        		this.fnSaveFileAll();
        	}


        // 	if (this.dsSave.rowcount == 0) return;
        //
        // 	var strSvcId    = "saveFile";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "upload=dsSave:A";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        // 	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        this.fnSaveFile2 = function()
        {
        	this.fileCount = this.fileCount - 1;

        	trace("fnSaveFile2", this.fileCount);

        	if(this.fileCount == 0){
        		trace("fnSaveFile2", "CALL >> fnSaveFileAll");

        		this.fnSaveFileAll();
        	}

        // 	if (this.dsSave2.rowcount == 0) return;
        //
        // 	var strSvcId    = "saveFile";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "upload=dsSave2:A";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        // 	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        this.fnSaveFile3 = function()
        {
        	this.fileCount = this.fileCount - 1;

        	trace("fnSaveFile3", this.fileCount);

        	if(this.fileCount == 0){
        		trace("fnSaveFile3", "CALL >> fnSaveFileAll");

        		this.fnSaveFileAll();
        	}

        // 	if (this.dsSave3.rowcount == 0) return;
        //
        // 	var strSvcId    = "saveFile";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "upload=dsSave3:A";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        // 	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        this.fnRemoveFile = function()
        {
        	if (this.dsRemove.rowcount == 0) return;

        	var strSvcId    = "removeFile";
        	var strSvcType  = "file/deleteFile";
        	var inProc		= "";
        	var inData      = "input=dsRemove:A";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        this.fnRemoveFile2 = function()
        {
        	if (this.dsRemove2.rowcount == 0) return;

        	var strSvcId    = "removeFile2";
        	var strSvcType  = "file/deleteFile";
        	var inProc		= "";
        	var inData      = "input=dsRemove2:A";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        this.fnRemoveFile3 = function()
        {
        	if (this.dsRemove3.rowcount == 0) return;

        	var strSvcId    = "removeFile3";
        	var strSvcType  = "file/deleteFile";
        	var inProc		= "";
        	var inData      = "input=dsRemove3:A";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        this.fnfileUploadCallback = function(){
        	//alert(this.popupVal.tempFilePath);
        	//alert(this.popupVal.timeValue);
        }

        this.fnDownload = function(downFlag) {
        	var sFilename = this.dsListSub.getColumn(0, downFlag + "_NM_FILE");
        	var sFilepath = this.dsListSub.getColumn(0, downFlag + "_DS_PATH")+"/";

        	var encodeFileName = encodeURIComponent(sFilename);

        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrl; // + encodeFileName;
        	this.FileDownTransfer.set_url(surl);

        	this.FileDownTransfer.setPostData("path", sFilepath);
        	this.FileDownTransfer.setPostData("fileName", encodeFileName);

        	if( system.navigatorname =="nexacro"){
        		this.FileDownTransfer.set_downloadfilename(sFilename);
        	}
        	this.FileDownTransfer.download();
        };


        this.divData_divDataRight_staGUNRO_ATTCHFILE_NM_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsListSub.getColumn(0, "GF_NM_FILE"))) return;
        	this.fnDownload("GF");
        };

        this.divData_divDataRight_staRETIRE_ATTCHFILE_NM_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsListSub.getColumn(0, "GF_NM_FILE"))) return;
        	this.fnDownload("RF");
        };

        this.divData_divDataRight_staFOR_ATTCHFILE_NM_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsListSub.getColumn(0, "GF_NM_FILE"))) return;
        	this.fnDownload("FF");
        };

        //그리드 파일 다운로드.
        this.divData_divDataRight_objGridSub2_oncellclick = function(obj,e)
        {
        // 	if(e.col == 6 || e.col == 7){
        //
        // 		var downFlag = "";
        // 		if(e.col == 6){
        // 			if(this.gfnIsNull(this.dsListSub2.getColumn(0, "GF_NM_FILE"))) return;
        // 			downFlag = "GF";
        // 		}
        //
        // 		if(e.col == 7){
        // 			if(this.gfnIsNull(this.dsListSub2.getColumn(0, "RF_NM_FILE"))) return;
        // 			downFlag = "RF";
        // 		}
        //
        // 		var sFilename = sFilename = this.dsListSub2.getColumn(e.row, downFlag + "_NM_FILE");
        // 		var sFilepath = this.dsListSub2.getColumn(e.row, downFlag + "_DS_PATH")+"/";
        //
        // 		var encodeFileName = encodeURIComponent(sFilename);
        //
        // 		var surl = this.fileConfig.host+ this.fileConfig.downloadUrl; // + encodeFileName;
        // 		this.FileDownTransfer.set_url(surl);
        //
        // 		this.FileDownTransfer.setPostData("path", sFilepath);
        // 		this.FileDownTransfer.setPostData("fileName", encodeFileName);
        //
        // 		if( system.navigatorname =="nexacro"){
        // 			this.FileDownTransfer.set_downloadfilename(sFilename);
        // 		}
        // 		this.FileDownTransfer.download();
        // 	}
        };

        this.fnEntdoc = function(){

        // 	if(this.dsList.rowcount < 1) { return; }
        //
        // 	if(this.gfnGetFormStatus(this) == "U")
        // 	{
        // 		this.gfnAlert("저장 후 진행해주세요.");
        // 		return false;
        // 	}
        //
        // 	var param = {};
        //
        // 	var tyChaiyong = this.dsListSub.getColumn(0, "TY_CHAIYONG");
        // 	var sitecd = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        // 	var sitenm = this.ccfCD_SITE.form.DSTextBox.value ;
        // 	var resno = this.dsList.getColumn(this.dsList.rowposition, "NO_ID_REAL");
        // 	var strReportName = "";
        //
        // 	if(tyChaiyong == "CM005002001"){
        // 		strReportName = "/ds/cmbd0040jm.ozr";
        // 	}else{
        // 		strReportName = "/ds/cmbd0041jm.ozr";
        // 	}
        //
        // 	param.REPORT_NAME = strReportName;
        // 	param.JSONPARAM = "{\"sitecd\":\""+ sitecd + "\", \"resno\":\"" + resno + "\", \"sitenm\":\"" + sitenm + "\"}";
        // 	console.log(param);
        // 	this.gfnFormOpenNonAuth("DZU", "DZU_OZ", "", param, 900, 650);

        }








        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.form.sta53_00.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.sta29.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.sta65.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.cboTY_CHAIYONG.addEventHandler("canitemchange",this.divData_divDataRight_cboTY_CHAIYONG_canitemchange,this);
            this.divData.form.divDataRight.form.objGridSub2.addEventHandler("oncellclick",this.divData_divDataRight_objGridSub2_oncellclick,this);
            this.divData.form.divDataRight.form.sta65_00.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.sta65_00_00.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.sta29_00.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.tclDT_IPSA.addEventHandler("onchanged",this.divData_divDataRight_tclDT_IPSA_onchanged,this);
            this.divData.form.divDataRight.form.chkYN_GOYONG.addEventHandler("onchanged",this.divData_divDataRight_chkYN_GOYONG_onchanged,this);
            this.divData.form.divDataRight.form.btnGUNRO_ATTCHFILE.addEventHandler("onclick",this.divData_divDataRight_btnGUNRO_ATTCHFILE_onclick,this);
            this.divData.form.divDataRight.form.btnRETIRE_ATTCHFILE.addEventHandler("onclick",this.divData_divDataRight_btnRETIRE_ATTCHFILE_onclick,this);
            this.divData.form.divDataRight.form.btnFOR_ATTCHFILE.addEventHandler("onclick",this.divData_divDataRight_btnFOR_ATTCHFILE_onclick,this);
            this.divData.form.divDataRight.form.btnGOYONG.addEventHandler("onclick",this.Button_onclick,this);
            this.divData.form.divDataRight.form.txtAM_ILGUB.addEventHandler("onchanged",this.divData_divDataRight_txtAM_ILGUB_onchanged,this);
            this.divData.form.divDataRight.form.staGUNRO_ATTCHFILE_NM.addEventHandler("onclick",this.divData_divDataRight_staGUNRO_ATTCHFILE_NM_onclick,this);
            this.divData.form.divDataRight.form.staRETIRE_ATTCHFILE_NM.addEventHandler("onclick",this.divData_divDataRight_staRETIRE_ATTCHFILE_NM_onclick,this);
            this.divData.form.divDataRight.form.staFOR_ATTCHFILE_NM.addEventHandler("onclick",this.divData_divDataRight_staFOR_ATTCHFILE_NM_onclick,this);
            this.divData.form.divDataRight.form.btnInsuUser.addEventHandler("onclick",this.Button_onclick,this);
            this.dsListSub.addEventHandler("oncolumnchanged",this.dsListSub_oncolumnchanged,this);
            this.dsListSub.addEventHandler("cancolumnchange",this.dsListSub_cancolumnchange,this);
            this.dsListSub.addEventHandler("onvaluechanged",this.dsListSub_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileUpTransfer.addEventHandler("onsuccess",this.fileUpTransfer_onsuccess,this);
            this.fileUpTransfer2.addEventHandler("onsuccess",this.fileUpTransfer2_onsuccess,this);
            this.fileUpTransfer3.addEventHandler("onsuccess",this.fileUpTransfer3_onsuccess,this);
            this.fileDialog2.addEventHandler("onclose",this.fileDialog2_onclose,this);
            this.fileDialog3.addEventHandler("onclose",this.fileDialog3_onclose,this);
        };
        this.loadIncludeScript("DSA_EMPLOYEE_LIST_20211109.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
