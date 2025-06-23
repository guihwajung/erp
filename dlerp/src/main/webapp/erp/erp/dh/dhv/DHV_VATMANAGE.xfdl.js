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
            this.set_titletext("부가세신고서관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_VATMANAGE_SELECT_NEW</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHVPR_VATMANAGE_INSERT_NEW</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHVPR_FINALREC_CREATE_NEW </Col></Row><Row><Col id=\"TARGET\">esingo</Col><Col id=\"SP\">DHVPR_TAX_SINGO_CREATE</Col></Row><Row><Col id=\"TARGET\">selectTest</Col><Col id=\"SP\">DHVPR_VATMANAGE_SELECT_TEST</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DHVPR_VATMANAGE_PRINT_NEW</Col></Row><Row><Col id=\"TARGET\">aadisKetFile</Col><Col id=\"SP\">DHVPR_AADISKET_CREATE</Col></Row><Row><Col id=\"TARGET\">singoBillFile</Col><Col id=\"SP\">DHVPR_SINGO_BILL_FILE</Col></Row><Row><Col id=\"TARGET\">creditCardFile</Col><Col id=\"SP\">DHVPR_SINGO_CREDITCARD_FILE</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHVPR_VATMANAGE_UPDATE_NEW</Col></Row><Row><Col id=\"TARGET\">close</Col><Col id=\"SP\">DHVPR_VATMANAGE_CLOSE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TAX1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TAX2\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_TAX", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">예정</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">확정</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_DAEPYO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ENTER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REFUND\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ZERO\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CLOSE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsESingo", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_DAEPYO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SJC\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ENTER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_GUBUN1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUBUN2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUBUN3\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GUMAK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EDIT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALEBUY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PROOF\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_GUBUN1\">과세 표준 및&#13;&#10;매출 세액</Col><Col id=\"DS_GUBUN2\">과세</Col><Col id=\"DS_GUBUN3\">세금계산서 발급분</Col><Col id=\"AM_GUMAK\"/><Col id=\"CD_GUBUN\">(1)</Col><Col id=\"DS_RATE\">10/100</Col><Col id=\"TY_GUBUN\">1</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">과세 표준 및&#13;&#10;매출 세액</Col><Col id=\"DS_GUBUN2\">과세</Col><Col id=\"DS_GUBUN3\">매입자발행 세금계산서</Col><Col id=\"AM_GUMAK\"/><Col id=\"CD_GUBUN\">(2)</Col><Col id=\"DS_RATE\">10/100</Col><Col id=\"TY_GUBUN\">2</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">과세 표준 및&#13;&#10;매출 세액</Col><Col id=\"DS_GUBUN2\">과세</Col><Col id=\"DS_GUBUN3\">신용카드ㆍ현금영수증 발행분</Col><Col id=\"AM_GUMAK\"/><Col id=\"CD_GUBUN\">(3)</Col><Col id=\"DS_RATE\">10/100</Col><Col id=\"TY_GUBUN\">3</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">과세 표준 및&#13;&#10;매출 세액</Col><Col id=\"DS_GUBUN2\">과세</Col><Col id=\"DS_GUBUN3\">기타(정규영수증 외 매출분)</Col><Col id=\"AM_GUMAK\"/><Col id=\"CD_GUBUN\">(4)</Col><Col id=\"DS_RATE\">10/100</Col><Col id=\"TY_GUBUN\">4</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">과세 표준 및&#13;&#10;매출 세액</Col><Col id=\"DS_GUBUN2\">영세율</Col><Col id=\"AM_GUMAK\"/><Col id=\"DS_GUBUN3\">세금계산서 발급분</Col><Col id=\"CD_GUBUN\">(5)</Col><Col id=\"DS_RATE\">0/100</Col><Col id=\"TY_GUBUN\">5</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">과세 표준 및&#13;&#10;매출 세액</Col><Col id=\"DS_GUBUN2\">영세율</Col><Col id=\"AM_GUMAK\"/><Col id=\"DS_GUBUN3\">기 타</Col><Col id=\"CD_GUBUN\">(6)</Col><Col id=\"TY_GUBUN\">6</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">과세 표준 및&#13;&#10;매출 세액</Col><Col id=\"DS_GUBUN2\">예 정 신 고 누 락 분</Col><Col id=\"AM_GUMAK\"/><Col id=\"CD_GUBUN\">(7)</Col><Col id=\"DS_GUBUN3\">예 정 신 고 누 락 분</Col><Col id=\"TY_GUBUN\">7</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">과세 표준 및&#13;&#10;매출 세액</Col><Col id=\"DS_GUBUN2\">대 손 세 액 가 감</Col><Col id=\"AM_GUMAK\"/><Col id=\"CD_GUBUN\">(8)</Col><Col id=\"TY_GUBUN\">8</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">과세 표준 및&#13;&#10;매출 세액</Col><Col id=\"DS_GUBUN2\">합계</Col><Col id=\"AM_GUMAK\"/><Col id=\"CD_GUBUN\">(9)</Col><Col id=\"DS_RATE\">㉮</Col><Col id=\"TY_GUBUN\">9</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">매입세액</Col><Col id=\"DS_GUBUN2\">세금계산서 수취분</Col><Col id=\"DS_GUBUN3\">일 반 매 입</Col><Col id=\"CD_GUBUN\">(10)</Col><Col id=\"TY_GUBUN\">10</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">매입세액</Col><Col id=\"DS_GUBUN2\">세금계산서 수취분</Col><Col id=\"DS_GUBUN3\">수출기업 수입분 납부유예</Col><Col id=\"CD_GUBUN\">(10-1)</Col><Col id=\"TY_GUBUN\">10-1</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">매입세액</Col><Col id=\"DS_GUBUN2\">세금계산서 수취분</Col><Col id=\"DS_GUBUN3\">고정자산 매입</Col><Col id=\"CD_GUBUN\">(11)</Col><Col id=\"TY_GUBUN\">11</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">매입세액</Col><Col id=\"DS_GUBUN2\">예 정 신 고 누 락 분</Col><Col id=\"CD_GUBUN\">(12)</Col><Col id=\"TY_GUBUN\">12</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">매입세액</Col><Col id=\"DS_GUBUN2\">매입자발행 세금계산서</Col><Col id=\"CD_GUBUN\">(13)</Col><Col id=\"TY_GUBUN\">13</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">매입세액</Col><Col id=\"DS_GUBUN2\">그 밖의 공제매입세액</Col><Col id=\"CD_GUBUN\">(14)</Col><Col id=\"TY_GUBUN\">14</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">매입세액</Col><Col id=\"DS_GUBUN2\">합계(10)-(10-1)+(11)+(12)+(13)+(14)</Col><Col id=\"CD_GUBUN\">(15)</Col><Col id=\"TY_GUBUN\">15</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">매입세액</Col><Col id=\"DS_GUBUN2\">공제받지 못할 매입세액</Col><Col id=\"CD_GUBUN\">(16)</Col><Col id=\"TY_GUBUN\">16</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">매입세액</Col><Col id=\"DS_GUBUN2\">차 감 계 (15)-(16)</Col><Col id=\"CD_GUBUN\">(17)</Col><Col id=\"DS_RATE\">㉯</Col><Col id=\"TY_GUBUN\">17</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">납부(환급)세액 (매출세액㉮-매입세액㉯)</Col><Col id=\"DS_RATE\">㉰</Col><Col id=\"CD_GUBUN\"/><Col id=\"TY_GUBUN\">171</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">경감ㆍ공제 세액</Col><Col id=\"DS_GUBUN2\">그 밖의 경감ㆍ공제세액</Col><Col id=\"CD_GUBUN\">(18)</Col><Col id=\"TY_GUBUN\">18</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">경감ㆍ공제 세액</Col><Col id=\"DS_GUBUN2\">신용카드매출전표등 발행공제 등</Col><Col id=\"CD_GUBUN\">(19)</Col><Col id=\"TY_GUBUN\">19</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">경감ㆍ공제 세액</Col><Col id=\"DS_GUBUN2\">합 계</Col><Col id=\"CD_GUBUN\">(20)</Col><Col id=\"DS_RATE\">㉱</Col><Col id=\"TY_GUBUN\">20</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">소규모 개인사업자 부가가치세 감면세액</Col><Col id=\"CD_GUBUN\">(20-1)</Col><Col id=\"DS_RATE\">㉲</Col><Col id=\"TY_GUBUN\">201</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">예 정 신 고 미 환 급 세 액</Col><Col id=\"CD_GUBUN\">(21)</Col><Col id=\"DS_RATE\">㉳</Col><Col id=\"TY_GUBUN\">21</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">예 정 고 지 세 액</Col><Col id=\"CD_GUBUN\">(22)</Col><Col id=\"DS_RATE\">㉴</Col><Col id=\"TY_GUBUN\">22</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">사업양수자가 대리납부한 세액</Col><Col id=\"CD_GUBUN\">(23)</Col><Col id=\"DS_RATE\">㉵</Col><Col id=\"TY_GUBUN\">23</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">매입자 납부특례에 따라 납부한 세액</Col><Col id=\"CD_GUBUN\">(24)</Col><Col id=\"DS_RATE\">㉶</Col><Col id=\"TY_GUBUN\">24</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">신용카드업자가 대리납부한 세액</Col><Col id=\"CD_GUBUN\">(25)</Col><Col id=\"DS_RATE\">㉷</Col><Col id=\"TY_GUBUN\">25</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">가 산 세 액 계</Col><Col id=\"CD_GUBUN\">(26)</Col><Col id=\"DS_RATE\">㉸</Col><Col id=\"TY_GUBUN\">26</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">차감ㆍ가감하여 납부할 세액 (환급받을 세액)(㉰-㉱-㉲-㉳-㉴-㉵-㉶-㉷+㉸)</Col><Col id=\"CD_GUBUN\">(27)</Col><Col id=\"DS_RATE\">(27)</Col><Col id=\"TY_GUBUN\">27</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">총괄 납부 사업자가 납부할 세액(환급받을 세액)</Col><Col id=\"YN_EDIT\">N</Col><Col id=\"TY_GUBUN\">271</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListVatManage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_GUBUN1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUBUN2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUBUN3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUBUN4\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GUMAK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EDIT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALEBUY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PROOF\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_GUBUN1\">예정신고 누 락 분 명세</Col><Col id=\"DS_GUBUN2\">(7)매출</Col><Col id=\"DS_GUBUN3\">과세</Col><Col id=\"DS_GUBUN4\">세 금 계 산 서</Col><Col id=\"CD_GUBUN\">(33)</Col><Col id=\"TY_GUBUN\">33</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">예정신고 누 락 분 명세</Col><Col id=\"DS_GUBUN2\">(7)매출</Col><Col id=\"DS_GUBUN3\">과세</Col><Col id=\"DS_GUBUN4\">기 타</Col><Col id=\"CD_GUBUN\">(34)</Col><Col id=\"DS_RATE\">10/100</Col><Col id=\"TY_GUBUN\">34</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">예정신고 누 락 분 명세</Col><Col id=\"DS_GUBUN2\">(7)매출</Col><Col id=\"DS_GUBUN3\">영세율</Col><Col id=\"DS_GUBUN4\">세 금 계 산 서</Col><Col id=\"CD_GUBUN\">(35)</Col><Col id=\"DS_RATE\">0/100</Col><Col id=\"TY_GUBUN\">35</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">예정신고 누 락 분 명세</Col><Col id=\"DS_GUBUN2\">(7)매출</Col><Col id=\"DS_GUBUN3\">영세율</Col><Col id=\"DS_GUBUN4\">기 타</Col><Col id=\"CD_GUBUN\">(36)</Col><Col id=\"DS_RATE\">0/100</Col><Col id=\"TY_GUBUN\">36</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">예정신고 누 락 분 명세</Col><Col id=\"DS_GUBUN2\">(7)매출</Col><Col id=\"DS_GUBUN3\">합계</Col><Col id=\"CD_GUBUN\">(37)</Col><Col id=\"TY_GUBUN\">37</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">예정신고 누 락 분 명세</Col><Col id=\"DS_GUBUN2\">(12)매입</Col><Col id=\"DS_GUBUN3\">세 금 계 산 서</Col><Col id=\"CD_GUBUN\">(38)</Col><Col id=\"TY_GUBUN\">38</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">예정신고 누 락 분 명세</Col><Col id=\"DS_GUBUN2\">(12)매입</Col><Col id=\"DS_GUBUN3\">그 밖의 공제매입세액</Col><Col id=\"CD_GUBUN\">(39)</Col><Col id=\"TY_GUBUN\">39</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">예정신고 누 락 분 명세</Col><Col id=\"DS_GUBUN2\">(12)매입</Col><Col id=\"DS_GUBUN3\">합 계</Col><Col id=\"CD_GUBUN\">(40)</Col><Col id=\"TY_GUBUN\">40</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(14) 그 밖의 공 제&#13;&#10;매 입 세 액&#13;&#10;명세</Col><Col id=\"DS_GUBUN2\">신용카드매출전표등&#13;&#10;수령명세서 제출분</Col><Col id=\"DS_GUBUN3\">신용카드매출전표등&#13;&#10;수령명세서 제출분</Col><Col id=\"DS_GUBUN4\">일반매입</Col><Col id=\"CD_GUBUN\">(41)</Col><Col id=\"TY_GUBUN\">41</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(14) 그 밖의 공 제&#13;&#10;매 입 세 액&#13;&#10;명세</Col><Col id=\"DS_GUBUN2\">신용카드매출전표등&#13;&#10;수령명세서 제출분</Col><Col id=\"DS_GUBUN3\">신용카드매출전표등&#13;&#10;수령명세서 제출분</Col><Col id=\"DS_GUBUN4\">고정자산매입</Col><Col id=\"CD_GUBUN\">(42)</Col><Col id=\"TY_GUBUN\">42</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(14) 그 밖의 공 제&#13;&#10;매 입 세 액&#13;&#10;명세</Col><Col id=\"DS_GUBUN2\">의 제 매 입 세 액</Col><Col id=\"CD_GUBUN\">(43)</Col><Col id=\"DS_RATE\">뒤쪽 참조</Col><Col id=\"TY_GUBUN\">43</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(14) 그 밖의 공 제&#13;&#10;매 입 세 액&#13;&#10;명세</Col><Col id=\"DS_GUBUN2\">재 활 용 폐 자 원 등 매 입 세 액</Col><Col id=\"CD_GUBUN\">(44)</Col><Col id=\"DS_RATE\">뒤쪽 참조</Col><Col id=\"TY_GUBUN\">44</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(14) 그 밖의 공 제&#13;&#10;매 입 세 액&#13;&#10;명세</Col><Col id=\"DS_GUBUN2\">과세사업전환 매입세액</Col><Col id=\"CD_GUBUN\">(45)</Col><Col id=\"TY_GUBUN\">45</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(14) 그 밖의 공 제&#13;&#10;매 입 세 액&#13;&#10;명세</Col><Col id=\"DS_GUBUN2\">재 고 매 입 세 액</Col><Col id=\"CD_GUBUN\">(46)</Col><Col id=\"TY_GUBUN\">46</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(14) 그 밖의 공 제&#13;&#10;매 입 세 액&#13;&#10;명세</Col><Col id=\"DS_GUBUN2\">변 제 대 손 세 액</Col><Col id=\"CD_GUBUN\">(47)</Col><Col id=\"TY_GUBUN\">47</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(14) 그 밖의 공 제&#13;&#10;매 입 세 액&#13;&#10;명세</Col><Col id=\"DS_GUBUN2\">외국인 관광객에 대한 환급세액</Col><Col id=\"CD_GUBUN\">(48)</Col><Col id=\"TY_GUBUN\">48</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(14) 그 밖의 공 제&#13;&#13;&#10;매 입 세 액&#13;&#10;명세</Col><Col id=\"TY_GUBUN\">999</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(14) 그 밖의 공 제&#13;&#13;&#10;매 입 세 액&#13;&#10;명세</Col><Col id=\"DS_GUBUN2\">합 계</Col><Col id=\"CD_GUBUN\">(49)</Col><Col id=\"TY_GUBUN\">49</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(16) 공제받지 못할&#13;&#10;매입세액 명세</Col><Col id=\"DS_GUBUN2\">공제받지 못할 매입세액</Col><Col id=\"CD_GUBUN\">(50)</Col><Col id=\"TY_GUBUN\">50</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(16) 공제받지 못할&#13;&#10;매입세액 명세</Col><Col id=\"DS_GUBUN2\">공통매입세액 중 면세사업등 해당 세액</Col><Col id=\"CD_GUBUN\">(51)</Col><Col id=\"TY_GUBUN\">51</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(16) 공제받지 못할&#13;&#10;매입세액 명세</Col><Col id=\"DS_GUBUN2\">대 손 처 분 받 은 세 액</Col><Col id=\"CD_GUBUN\">(52)</Col><Col id=\"TY_GUBUN\">52</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(16) 공제받지 못할&#13;&#10;매입세액 명세</Col><Col id=\"DS_GUBUN2\">합 계</Col><Col id=\"CD_GUBUN\">(53)</Col><Col id=\"TY_GUBUN\">53</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(18) 그 밖의&#13;&#10;경감ㆍ공제&#13; &#10;세액 명세</Col><Col id=\"DS_GUBUN2\">전 자 신 고 세 액 공 제</Col><Col id=\"CD_GUBUN\">(54)</Col><Col id=\"TY_GUBUN\">54</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(18) 그 밖의&#13;&#10;경감ㆍ공제&#13; &#10;세액 명세</Col><Col id=\"DS_GUBUN2\">전자세금계산서 발급세액 공제</Col><Col id=\"CD_GUBUN\">(55)</Col><Col id=\"TY_GUBUN\">55</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(18) 그 밖의&#13;&#10;경감ㆍ공제&#13; &#10;세액 명세</Col><Col id=\"DS_GUBUN2\">택 시 운 송 사 업 자 경 감 세 액</Col><Col id=\"CD_GUBUN\">(56)</Col><Col id=\"TY_GUBUN\">56</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(18) 그 밖의&#13;&#10;경감ㆍ공제&#13; &#10;세액 명세</Col><Col id=\"DS_GUBUN2\">대리납부 세액공제</Col><Col id=\"CD_GUBUN\">(57)</Col><Col id=\"TY_GUBUN\">57</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(18) 그 밖의&#13;&#10;경감ㆍ공제&#13; &#10;세액 명세</Col><Col id=\"DS_GUBUN2\">현금영수증사업자 세액공제</Col><Col id=\"CD_GUBUN\">(58)</Col><Col id=\"TY_GUBUN\">58</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(18) 그 밖의&#13;&#10;경감ㆍ공제&#13; &#10;세액 명세</Col><Col id=\"DS_GUBUN2\">기 타</Col><Col id=\"CD_GUBUN\">(59)</Col><Col id=\"TY_GUBUN\">59</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(18) 그 밖의&#13;&#10;경감ㆍ공제&#13; &#10;세액 명세</Col><Col id=\"DS_GUBUN2\">합 계</Col><Col id=\"CD_GUBUN\">(60)</Col><Col id=\"TY_GUBUN\">60</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">사 업 자 미 등 록 등</Col><Col id=\"DS_GUBUN3\">사 업 자 미 등 록 등</Col><Col id=\"CD_GUBUN\">(61)</Col><Col id=\"DS_RATE\">1/100</Col><Col id=\"TY_GUBUN\">61</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">세금계산서</Col><Col id=\"DS_GUBUN3\">세금계산서</Col><Col id=\"DS_GUBUN4\">지연발급 등</Col><Col id=\"CD_GUBUN\">(62)</Col><Col id=\"DS_RATE\">1/100</Col><Col id=\"TY_GUBUN\">62</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">세금계산서</Col><Col id=\"DS_GUBUN3\">세금계산서</Col><Col id=\"DS_GUBUN4\">지연수취</Col><Col id=\"CD_GUBUN\">(63)</Col><Col id=\"DS_RATE\">5/1,000</Col><Col id=\"TY_GUBUN\">63</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">세금계산서</Col><Col id=\"DS_GUBUN3\">세금계산서</Col><Col id=\"DS_GUBUN4\">미발급 등</Col><Col id=\"CD_GUBUN\">(64)</Col><Col id=\"DS_RATE\">뒤쪽 참조</Col><Col id=\"TY_GUBUN\">64</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">전자세금계산서 </Col><Col id=\"DS_GUBUN3\">전자세금계산서 </Col><Col id=\"DS_GUBUN4\">지연전송</Col><Col id=\"CD_GUBUN\">(65)</Col><Col id=\"DS_RATE\">3/1,000</Col><Col id=\"TY_GUBUN\">65</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">발급명세 전송</Col><Col id=\"DS_GUBUN3\">발급명세 전송</Col><Col id=\"DS_GUBUN4\">미전송</Col><Col id=\"CD_GUBUN\">(66)</Col><Col id=\"DS_RATE\">5/1,000</Col><Col id=\"TY_GUBUN\">66</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">세금계산서</Col><Col id=\"DS_GUBUN3\">세금계산서</Col><Col id=\"DS_GUBUN4\">제출 불성실</Col><Col id=\"CD_GUBUN\">(67)</Col><Col id=\"DS_RATE\">5/1,000</Col><Col id=\"TY_GUBUN\">67</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">합계표</Col><Col id=\"DS_GUBUN3\">합계표</Col><Col id=\"DS_GUBUN4\">지연제출</Col><Col id=\"CD_GUBUN\">(68)</Col><Col id=\"DS_RATE\">3/1,000</Col><Col id=\"TY_GUBUN\">68</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">신 고 불 성 실</Col><Col id=\"DS_GUBUN3\">신 고 불 성 실</Col><Col id=\"DS_GUBUN4\">무신고(일반)</Col><Col id=\"CD_GUBUN\">(69)</Col><Col id=\"DS_RATE\">뒤쪽참조</Col><Col id=\"TY_GUBUN\">69</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">신 고 불 성 실</Col><Col id=\"DS_GUBUN3\">신 고 불 성 실</Col><Col id=\"DS_GUBUN4\">무신고(부당)</Col><Col id=\"CD_GUBUN\">(70)</Col><Col id=\"DS_RATE\">뒤쪽참조</Col><Col id=\"TY_GUBUN\">70</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">신 고 불 성 실</Col><Col id=\"DS_GUBUN3\">신 고 불 성 실</Col><Col id=\"DS_GUBUN4\">과소ㆍ초과환급신고(일반)</Col><Col id=\"CD_GUBUN\">(71)</Col><Col id=\"DS_RATE\">뒤쪽참조</Col><Col id=\"TY_GUBUN\">71</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">신 고 불 성 실</Col><Col id=\"DS_GUBUN3\">신 고 불 성 실</Col><Col id=\"DS_GUBUN4\">과소ㆍ초과환급신고(부당)</Col><Col id=\"CD_GUBUN\">(72)</Col><Col id=\"DS_RATE\">뒤쪽참조</Col><Col id=\"TY_GUBUN\">72</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">납 부 지 연 </Col><Col id=\"CD_GUBUN\">(73)</Col><Col id=\"DS_RATE\">뒤쪽참조</Col><Col id=\"TY_GUBUN\">73</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">영세율 과세표준신고 불성실</Col><Col id=\"CD_GUBUN\">(74)</Col><Col id=\"DS_RATE\">5/1,000</Col><Col id=\"TY_GUBUN\">74</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">현금매출명세서 불성실</Col><Col id=\"CD_GUBUN\">(75)</Col><Col id=\"DS_RATE\">1/100</Col><Col id=\"TY_GUBUN\">75</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">부동산임대공급가액명세서 불성실</Col><Col id=\"CD_GUBUN\">(76)</Col><Col id=\"DS_RATE\">1/100</Col><Col id=\"TY_GUBUN\">76</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">매입자 납부특례</Col><Col id=\"DS_GUBUN3\">매입자 납부특례</Col><Col id=\"DS_GUBUN4\">거래계좌 미사용</Col><Col id=\"CD_GUBUN\">(77)</Col><Col id=\"DS_RATE\">뒤쪽참조</Col><Col id=\"TY_GUBUN\">77</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">매입자 납부특례</Col><Col id=\"DS_GUBUN3\">매입자 납부특례</Col><Col id=\"DS_GUBUN4\">거래계좌 지연입금</Col><Col id=\"CD_GUBUN\">(78)</Col><Col id=\"DS_RATE\">뒤쪽참조</Col><Col id=\"TY_GUBUN\">78</Col><Col id=\"YN_EDIT\">N</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">신용카드매출전표 등 수령명세서 미제출.과다기재</Col><Col id=\"CD_GUBUN\">(79)</Col><Col id=\"TY_GUBUN\">79</Col><Col id=\"YN_EDIT\">N</Col><Col id=\"DS_RATE\">5/1,000</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">합 계</Col><Col id=\"CD_GUBUN\">(80)</Col><Col id=\"TY_GUBUN\">80</Col><Col id=\"YN_EDIT\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListTitle01", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_GUBUN1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUBUN2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUBUN3\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GUMAK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_GUBUN1\">과세 표준 및&#13;&#10;매출 세액</Col><Col id=\"DS_GUBUN2\">과세</Col><Col id=\"DS_GUBUN3\">세금계산서 발급분</Col><Col id=\"AM_GUMAK\"/><Col id=\"CD_GUBUN\">(1)</Col><Col id=\"DS_RATE\">10/100</Col><Col id=\"TY_GUBUN\">1</Col></Row><Row><Col id=\"DS_GUBUN1\">과세 표준 및&#13;&#10;매출 세액</Col><Col id=\"DS_GUBUN2\">과세</Col><Col id=\"DS_GUBUN3\">매입자발행 세금계산서</Col><Col id=\"AM_GUMAK\"/><Col id=\"CD_GUBUN\">(2)</Col><Col id=\"DS_RATE\">10/100</Col><Col id=\"TY_GUBUN\">2</Col></Row><Row><Col id=\"DS_GUBUN1\">과세 표준 및&#13;&#10;매출 세액</Col><Col id=\"DS_GUBUN2\">과세</Col><Col id=\"DS_GUBUN3\">신용카드ㆍ현금영수증 발행분</Col><Col id=\"AM_GUMAK\"/><Col id=\"CD_GUBUN\">(3)</Col><Col id=\"DS_RATE\">10/100</Col><Col id=\"TY_GUBUN\">3</Col></Row><Row><Col id=\"DS_GUBUN1\">과세 표준 및&#13;&#10;매출 세액</Col><Col id=\"DS_GUBUN2\">과세</Col><Col id=\"DS_GUBUN3\">기타(정규영수증 외 매출분)</Col><Col id=\"AM_GUMAK\"/><Col id=\"CD_GUBUN\">(4)</Col><Col id=\"DS_RATE\">10/100</Col><Col id=\"TY_GUBUN\">4</Col></Row><Row><Col id=\"DS_GUBUN1\">과세 표준 및&#13;&#10;매출 세액</Col><Col id=\"DS_GUBUN2\">영세율</Col><Col id=\"AM_GUMAK\"/><Col id=\"DS_GUBUN3\">세금계산서 발급분</Col><Col id=\"CD_GUBUN\">(5)</Col><Col id=\"DS_RATE\">0/100</Col><Col id=\"TY_GUBUN\">5</Col></Row><Row><Col id=\"DS_GUBUN1\">과세 표준 및&#13;&#10;매출 세액</Col><Col id=\"DS_GUBUN2\">영세율</Col><Col id=\"AM_GUMAK\"/><Col id=\"DS_GUBUN3\">기 타</Col><Col id=\"CD_GUBUN\">(6)</Col><Col id=\"TY_GUBUN\">6</Col></Row><Row><Col id=\"DS_GUBUN1\">과세 표준 및&#13;&#10;매출 세액</Col><Col id=\"DS_GUBUN2\">예 정 신 고 누 락 분</Col><Col id=\"AM_GUMAK\"/><Col id=\"CD_GUBUN\">(7)</Col><Col id=\"DS_GUBUN3\">예 정 신 고 누 락 분</Col><Col id=\"TY_GUBUN\">7</Col></Row><Row><Col id=\"DS_GUBUN1\">과세 표준 및&#13;&#10;매출 세액</Col><Col id=\"DS_GUBUN2\">대 손 세 액 가 감</Col><Col id=\"AM_GUMAK\"/><Col id=\"CD_GUBUN\">(8)</Col><Col id=\"TY_GUBUN\">8</Col></Row><Row><Col id=\"DS_GUBUN1\">과세 표준 및&#13;&#10;매출 세액</Col><Col id=\"DS_GUBUN2\">합계</Col><Col id=\"AM_GUMAK\"/><Col id=\"CD_GUBUN\">(9)</Col><Col id=\"DS_RATE\">㉮</Col><Col id=\"TY_GUBUN\">9</Col></Row><Row><Col id=\"DS_GUBUN1\">매입세액</Col><Col id=\"DS_GUBUN2\">세금계산서 수취분</Col><Col id=\"DS_GUBUN3\">일 반 매 입</Col><Col id=\"CD_GUBUN\">(10)</Col><Col id=\"TY_GUBUN\">10</Col></Row><Row><Col id=\"DS_GUBUN1\">매입세액</Col><Col id=\"DS_GUBUN2\">세금계산서 수취분</Col><Col id=\"DS_GUBUN3\">수출기업 수입분 납부유예</Col><Col id=\"CD_GUBUN\">(10-1)</Col><Col id=\"TY_GUBUN\">10-1</Col></Row><Row><Col id=\"DS_GUBUN1\">매입세액</Col><Col id=\"DS_GUBUN2\">세금계산서 수취분</Col><Col id=\"DS_GUBUN3\">고정자산 매입</Col><Col id=\"CD_GUBUN\">(11)</Col><Col id=\"TY_GUBUN\">11</Col></Row><Row><Col id=\"DS_GUBUN1\">매입세액</Col><Col id=\"DS_GUBUN2\">예 정 신 고 누 락 분</Col><Col id=\"CD_GUBUN\">(12)</Col><Col id=\"TY_GUBUN\">12</Col></Row><Row><Col id=\"DS_GUBUN1\">매입세액</Col><Col id=\"DS_GUBUN2\">매입자발행 세금계산서</Col><Col id=\"CD_GUBUN\">(13)</Col><Col id=\"TY_GUBUN\">13</Col></Row><Row><Col id=\"DS_GUBUN1\">매입세액</Col><Col id=\"DS_GUBUN2\">그 밖의 공제매입세액</Col><Col id=\"CD_GUBUN\">(14)</Col><Col id=\"TY_GUBUN\">14</Col></Row><Row><Col id=\"DS_GUBUN1\">매입세액</Col><Col id=\"DS_GUBUN2\">합계(10)-(10-1)+(11)+(12)+(13)+(14)</Col><Col id=\"CD_GUBUN\">(15)</Col><Col id=\"TY_GUBUN\">15</Col></Row><Row><Col id=\"DS_GUBUN1\">매입세액</Col><Col id=\"DS_GUBUN2\">공제받지 못할 매입세액</Col><Col id=\"CD_GUBUN\">(16)</Col><Col id=\"TY_GUBUN\">16</Col></Row><Row><Col id=\"DS_GUBUN1\">매입세액</Col><Col id=\"DS_GUBUN2\">차 감 계 (15)-(16)</Col><Col id=\"CD_GUBUN\">(17)</Col><Col id=\"DS_RATE\">㉯</Col><Col id=\"TY_GUBUN\">17</Col></Row><Row><Col id=\"DS_GUBUN1\">납부(환급)세액 (매출세액㉮-매입세액㉯)</Col><Col id=\"DS_RATE\">㉰</Col><Col id=\"CD_GUBUN\"/><Col id=\"TY_GUBUN\">171</Col></Row><Row><Col id=\"DS_GUBUN1\">경감ㆍ공제 세액</Col><Col id=\"DS_GUBUN2\">그 밖의 경감ㆍ공제세액</Col><Col id=\"CD_GUBUN\">(18)</Col><Col id=\"TY_GUBUN\">18</Col></Row><Row><Col id=\"DS_GUBUN1\">경감ㆍ공제 세액</Col><Col id=\"DS_GUBUN2\">신용카드매출전표등 발행공제 등</Col><Col id=\"CD_GUBUN\">(19)</Col><Col id=\"TY_GUBUN\">19</Col></Row><Row><Col id=\"DS_GUBUN1\">경감ㆍ공제 세액</Col><Col id=\"DS_GUBUN2\">합 계</Col><Col id=\"CD_GUBUN\">(20)</Col><Col id=\"DS_RATE\">㉱</Col><Col id=\"TY_GUBUN\">20</Col></Row><Row><Col id=\"DS_GUBUN1\">소규모 개인사업자 부가가치세 감면세액</Col><Col id=\"CD_GUBUN\">(20-1)</Col><Col id=\"DS_RATE\">㉲</Col><Col id=\"TY_GUBUN\">20-1</Col></Row><Row><Col id=\"DS_GUBUN1\">예 정 신 고 미 환 급 세 액</Col><Col id=\"CD_GUBUN\">(21)</Col><Col id=\"DS_RATE\">㉳</Col><Col id=\"TY_GUBUN\">21</Col></Row><Row><Col id=\"DS_GUBUN1\">예 정 고 지 세 액</Col><Col id=\"CD_GUBUN\">(22)</Col><Col id=\"DS_RATE\">㉴</Col><Col id=\"TY_GUBUN\">22</Col></Row><Row><Col id=\"DS_GUBUN1\">사업양수자가 대리납부한 세액</Col><Col id=\"CD_GUBUN\">(23)</Col><Col id=\"DS_RATE\">㉵</Col><Col id=\"TY_GUBUN\">23</Col></Row><Row><Col id=\"DS_GUBUN1\">매입자 납부특례에 따라 납부한 세액</Col><Col id=\"CD_GUBUN\">(24)</Col><Col id=\"DS_RATE\">㉶</Col><Col id=\"TY_GUBUN\">24</Col></Row><Row><Col id=\"DS_GUBUN1\">신용카드업자가 대리납부한 세액</Col><Col id=\"CD_GUBUN\">(25)</Col><Col id=\"DS_RATE\">㉷</Col><Col id=\"TY_GUBUN\">25</Col></Row><Row><Col id=\"DS_GUBUN1\">가 산 세 액 계</Col><Col id=\"CD_GUBUN\">(26)</Col><Col id=\"DS_RATE\">㉸</Col><Col id=\"TY_GUBUN\">26</Col></Row><Row><Col id=\"DS_GUBUN1\">차감ㆍ가감하여 납부할 세액 (환급받을 세액)(㉰-㉱-㉲-㉳-㉴-㉵-㉶-㉷+㉸)</Col><Col id=\"CD_GUBUN\">(27)</Col><Col id=\"DS_RATE\">(27)</Col><Col id=\"TY_GUBUN\">27</Col></Row><Row><Col id=\"DS_GUBUN1\">총괄 납부 사업자가 납부할 세액(환급받을 세액)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListTitle02", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_GUBUN1\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUBUN2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUBUN3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GUBUN4\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GUMAK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_GUBUN1\">예정신고 누 락 분 명세</Col><Col id=\"DS_GUBUN2\">(7)매출</Col><Col id=\"DS_GUBUN3\">과세</Col><Col id=\"DS_GUBUN4\">세 금 계 산 서</Col><Col id=\"CD_GUBUN\">(33)</Col><Col id=\"TY_GUBUN\">33</Col></Row><Row><Col id=\"DS_GUBUN1\">예정신고 누 락 분 명세</Col><Col id=\"DS_GUBUN2\">(7)매출</Col><Col id=\"DS_GUBUN3\">과세</Col><Col id=\"DS_GUBUN4\">기 타</Col><Col id=\"CD_GUBUN\">(34)</Col><Col id=\"DS_RATE\">10/100</Col><Col id=\"TY_GUBUN\">34</Col></Row><Row><Col id=\"DS_GUBUN1\">예정신고 누 락 분 명세</Col><Col id=\"DS_GUBUN2\">(7)매출</Col><Col id=\"DS_GUBUN3\">영세율</Col><Col id=\"DS_GUBUN4\">세 금 계 산 서</Col><Col id=\"CD_GUBUN\">(35)</Col><Col id=\"DS_RATE\">0/100</Col><Col id=\"TY_GUBUN\">35</Col></Row><Row><Col id=\"DS_GUBUN1\">예정신고 누 락 분 명세</Col><Col id=\"DS_GUBUN2\">(7)매출</Col><Col id=\"DS_GUBUN3\">영세율</Col><Col id=\"DS_GUBUN4\">기 타</Col><Col id=\"CD_GUBUN\">(36)</Col><Col id=\"DS_RATE\">0/100</Col><Col id=\"TY_GUBUN\">36</Col></Row><Row><Col id=\"DS_GUBUN1\">예정신고 누 락 분 명세</Col><Col id=\"DS_GUBUN2\">(7)매출</Col><Col id=\"DS_GUBUN3\">합계</Col><Col id=\"CD_GUBUN\">(37)</Col><Col id=\"TY_GUBUN\">37</Col></Row><Row><Col id=\"DS_GUBUN1\">예정신고 누 락 분 명세</Col><Col id=\"DS_GUBUN2\">(12)매입</Col><Col id=\"DS_GUBUN3\">세 금 계 산 서</Col><Col id=\"CD_GUBUN\">(38)</Col><Col id=\"TY_GUBUN\">38</Col></Row><Row><Col id=\"DS_GUBUN1\">예정신고 누 락 분 명세</Col><Col id=\"DS_GUBUN2\">(12)매입</Col><Col id=\"DS_GUBUN3\">그 밖의 공제매입세액</Col><Col id=\"CD_GUBUN\">(39)</Col><Col id=\"TY_GUBUN\">39</Col></Row><Row><Col id=\"DS_GUBUN1\">예정신고 누 락 분 명세</Col><Col id=\"DS_GUBUN2\">(12)매입</Col><Col id=\"DS_GUBUN3\">합 계</Col><Col id=\"CD_GUBUN\">(40)</Col><Col id=\"TY_GUBUN\">40</Col></Row><Row><Col id=\"DS_GUBUN1\">(14) 그 밖의 공 제&#13;&#10;매 입 세 액&#13;&#10;명세</Col><Col id=\"DS_GUBUN2\">신용카드매출전표등&#13;&#10;수령명세서 제출분</Col><Col id=\"DS_GUBUN3\">신용카드매출전표등&#13;&#10;수령명세서 제출분</Col><Col id=\"DS_GUBUN4\">일반매입</Col><Col id=\"CD_GUBUN\">(41)</Col><Col id=\"TY_GUBUN\">41</Col></Row><Row><Col id=\"DS_GUBUN1\">(14) 그 밖의 공 제&#13;&#10;매 입 세 액&#13;&#10;명세</Col><Col id=\"DS_GUBUN2\">신용카드매출전표등&#13;&#10;수령명세서 제출분</Col><Col id=\"DS_GUBUN3\">신용카드매출전표등&#13;&#10;수령명세서 제출분</Col><Col id=\"DS_GUBUN4\">고정자산매입</Col><Col id=\"CD_GUBUN\">(42)</Col><Col id=\"TY_GUBUN\">42</Col></Row><Row><Col id=\"DS_GUBUN1\">(14) 그 밖의 공 제&#13;&#10;매 입 세 액&#13;&#10;명세</Col><Col id=\"DS_GUBUN2\">의 제 매 입 세 액</Col><Col id=\"CD_GUBUN\">(43)</Col><Col id=\"DS_RATE\">뒤쪽 참조</Col><Col id=\"TY_GUBUN\">43</Col></Row><Row><Col id=\"DS_GUBUN1\">(14) 그 밖의 공 제&#13;&#10;매 입 세 액&#13;&#10;명세</Col><Col id=\"DS_GUBUN2\">재 활 용 폐 자 원 등 매 입 세 액</Col><Col id=\"CD_GUBUN\">(44)</Col><Col id=\"DS_RATE\">뒤쪽 참조</Col><Col id=\"TY_GUBUN\">44</Col></Row><Row><Col id=\"DS_GUBUN1\">(14) 그 밖의 공 제&#13;&#10;매 입 세 액&#13;&#10;명세</Col><Col id=\"DS_GUBUN2\">과세사업전환 매입세액</Col><Col id=\"CD_GUBUN\">(45)</Col><Col id=\"TY_GUBUN\">45</Col></Row><Row><Col id=\"DS_GUBUN1\">(14) 그 밖의 공 제&#13;&#10;매 입 세 액&#13;&#10;명세</Col><Col id=\"DS_GUBUN2\">재 고 매 입 세 액</Col><Col id=\"CD_GUBUN\">(46)</Col><Col id=\"TY_GUBUN\">46</Col></Row><Row><Col id=\"DS_GUBUN1\">(14) 그 밖의 공 제&#13;&#10;매 입 세 액&#13;&#10;명세</Col><Col id=\"DS_GUBUN2\">변 제 대 손 세 액</Col><Col id=\"CD_GUBUN\">(47)</Col><Col id=\"TY_GUBUN\">47</Col></Row><Row><Col id=\"DS_GUBUN1\">(14) 그 밖의 공 제&#13;&#10;매 입 세 액&#13;&#10;명세</Col><Col id=\"DS_GUBUN2\">외국인 관광객에 대한 환급세액</Col><Col id=\"CD_GUBUN\">(48)</Col><Col id=\"TY_GUBUN\">48</Col></Row><Row><Col id=\"DS_GUBUN1\">(14) 그 밖의 공 제&#13;&#13;&#10;매 입 세 액&#13;&#10;명세</Col><Col id=\"TY_GUBUN\">999</Col></Row><Row><Col id=\"DS_GUBUN1\">(14) 그 밖의 공 제&#13;&#13;&#10;매 입 세 액&#13;&#10;명세</Col><Col id=\"DS_GUBUN2\">합 계</Col><Col id=\"CD_GUBUN\">(49)</Col><Col id=\"TY_GUBUN\">49</Col></Row><Row><Col id=\"DS_GUBUN1\">(16) 공제받지 못할&#13;&#10;매입세액 명세</Col><Col id=\"DS_GUBUN2\">공제받지 못할 매입세액</Col><Col id=\"CD_GUBUN\">(50)</Col><Col id=\"TY_GUBUN\">50</Col></Row><Row><Col id=\"DS_GUBUN1\">(16) 공제받지 못할&#13;&#10;매입세액 명세</Col><Col id=\"DS_GUBUN2\">공통매입세액 중 면세사업등 해당 세액</Col><Col id=\"CD_GUBUN\">(51)</Col><Col id=\"TY_GUBUN\">51</Col></Row><Row><Col id=\"DS_GUBUN1\">(16) 공제받지 못할&#13;&#10;매입세액 명세</Col><Col id=\"DS_GUBUN2\">대 손 처 분 받 은 세 액</Col><Col id=\"CD_GUBUN\">(52)</Col><Col id=\"TY_GUBUN\">52</Col></Row><Row><Col id=\"DS_GUBUN1\">(16) 공제받지 못할&#13;&#10;매입세액 명세</Col><Col id=\"DS_GUBUN2\">합 계</Col><Col id=\"CD_GUBUN\">(53)</Col><Col id=\"TY_GUBUN\">53</Col></Row><Row><Col id=\"DS_GUBUN1\">(18) 그 밖의&#13;&#10;경감ㆍ공제&#13; &#10;세액 명세</Col><Col id=\"DS_GUBUN2\">전 자 신 고 세 액 공 제</Col><Col id=\"CD_GUBUN\">(54)</Col><Col id=\"TY_GUBUN\">54</Col></Row><Row><Col id=\"DS_GUBUN1\">(18) 그 밖의&#13;&#10;경감ㆍ공제&#13; &#10;세액 명세</Col><Col id=\"DS_GUBUN2\">전자세금계산서 발급세액 공제</Col><Col id=\"CD_GUBUN\">(55)</Col><Col id=\"TY_GUBUN\">55</Col></Row><Row><Col id=\"DS_GUBUN1\">(18) 그 밖의&#13;&#10;경감ㆍ공제&#13; &#10;세액 명세</Col><Col id=\"DS_GUBUN2\">택 시 운 송 사 업 자 경 감 세 액</Col><Col id=\"CD_GUBUN\">(56)</Col><Col id=\"TY_GUBUN\">56</Col></Row><Row><Col id=\"DS_GUBUN1\">(18) 그 밖의&#13;&#10;경감ㆍ공제&#13; &#10;세액 명세</Col><Col id=\"DS_GUBUN2\">대리납부 세액공제</Col><Col id=\"CD_GUBUN\">(57)</Col><Col id=\"TY_GUBUN\">57</Col></Row><Row><Col id=\"DS_GUBUN1\">(18) 그 밖의&#13;&#10;경감ㆍ공제&#13; &#10;세액 명세</Col><Col id=\"DS_GUBUN2\">현금영수증사업자 세액공제</Col><Col id=\"CD_GUBUN\">(58)</Col><Col id=\"TY_GUBUN\">58</Col></Row><Row><Col id=\"DS_GUBUN1\">(18) 그 밖의&#13;&#10;경감ㆍ공제&#13; &#10;세액 명세</Col><Col id=\"DS_GUBUN2\">기 타</Col><Col id=\"CD_GUBUN\">(59)</Col><Col id=\"TY_GUBUN\">59</Col></Row><Row><Col id=\"DS_GUBUN1\">(18) 그 밖의&#13;&#10;경감ㆍ공제&#13; &#10;세액 명세</Col><Col id=\"DS_GUBUN2\">합 계</Col><Col id=\"CD_GUBUN\">(60)</Col><Col id=\"TY_GUBUN\">60</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">사 업 자 미 등 록 등</Col><Col id=\"DS_GUBUN3\">사 업 자 미 등 록 등</Col><Col id=\"CD_GUBUN\">(61)</Col><Col id=\"DS_RATE\">1/100</Col><Col id=\"TY_GUBUN\">61</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">세금계산서</Col><Col id=\"DS_GUBUN3\">세금계산서</Col><Col id=\"DS_GUBUN4\">지연발급 등</Col><Col id=\"CD_GUBUN\">(62)</Col><Col id=\"DS_RATE\">1/100</Col><Col id=\"TY_GUBUN\">62</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">세금계산서</Col><Col id=\"DS_GUBUN3\">세금계산서</Col><Col id=\"DS_GUBUN4\">지연수취</Col><Col id=\"CD_GUBUN\">(63)</Col><Col id=\"DS_RATE\">5/1,000</Col><Col id=\"TY_GUBUN\">63</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">세금계산서</Col><Col id=\"DS_GUBUN3\">세금계산서</Col><Col id=\"DS_GUBUN4\">미발급 등</Col><Col id=\"CD_GUBUN\">(64)</Col><Col id=\"DS_RATE\">뒤쪽 참조</Col><Col id=\"TY_GUBUN\">64</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">전자세금계산서 </Col><Col id=\"DS_GUBUN3\">전자세금계산서 </Col><Col id=\"DS_GUBUN4\">지연전송</Col><Col id=\"CD_GUBUN\">(65)</Col><Col id=\"DS_RATE\">3/1,000</Col><Col id=\"TY_GUBUN\">65</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">발급명세 전송</Col><Col id=\"DS_GUBUN3\">발급명세 전송</Col><Col id=\"DS_GUBUN4\">미전송</Col><Col id=\"CD_GUBUN\">(66)</Col><Col id=\"DS_RATE\">5/1,000</Col><Col id=\"TY_GUBUN\">66</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">세금계산서</Col><Col id=\"DS_GUBUN3\">세금계산서</Col><Col id=\"DS_GUBUN4\">제출 불성실</Col><Col id=\"CD_GUBUN\">(67)</Col><Col id=\"DS_RATE\">5/1,000</Col><Col id=\"TY_GUBUN\">67</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">합계표</Col><Col id=\"DS_GUBUN3\">합계표</Col><Col id=\"DS_GUBUN4\">지연제출</Col><Col id=\"CD_GUBUN\">(68)</Col><Col id=\"DS_RATE\">3/1,000</Col><Col id=\"TY_GUBUN\">68</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">신 고 불 성 실</Col><Col id=\"DS_GUBUN3\">신 고 불 성 실</Col><Col id=\"DS_GUBUN4\">무신고(일반)</Col><Col id=\"CD_GUBUN\">(69)</Col><Col id=\"DS_RATE\">뒤쪽참조</Col><Col id=\"TY_GUBUN\">69</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">신 고 불 성 실</Col><Col id=\"DS_GUBUN3\">신 고 불 성 실</Col><Col id=\"DS_GUBUN4\">무신고(부당)</Col><Col id=\"CD_GUBUN\">(70)</Col><Col id=\"DS_RATE\">뒤쪽참조</Col><Col id=\"TY_GUBUN\">70</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">신 고 불 성 실</Col><Col id=\"DS_GUBUN3\">신 고 불 성 실</Col><Col id=\"DS_GUBUN4\">과소ㆍ초과환급신고(일반)</Col><Col id=\"CD_GUBUN\">(71)</Col><Col id=\"DS_RATE\">뒤쪽참조</Col><Col id=\"TY_GUBUN\">71</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">신 고 불 성 실</Col><Col id=\"DS_GUBUN3\">신 고 불 성 실</Col><Col id=\"DS_GUBUN4\">과소ㆍ초과환급신고(부당)</Col><Col id=\"CD_GUBUN\">(72)</Col><Col id=\"DS_RATE\">뒤쪽참조</Col><Col id=\"TY_GUBUN\">72</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">납 부 지 연 </Col><Col id=\"CD_GUBUN\">(73)</Col><Col id=\"DS_RATE\">뒤쪽참조</Col><Col id=\"TY_GUBUN\">73</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">영세율 과세표준신고 불성실</Col><Col id=\"CD_GUBUN\">(74)</Col><Col id=\"DS_RATE\">5/1,000</Col><Col id=\"TY_GUBUN\">74</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">현금매출명세서 불성실</Col><Col id=\"CD_GUBUN\">(75)</Col><Col id=\"DS_RATE\">1/100</Col><Col id=\"TY_GUBUN\">75</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">부동산임대공급가액명세서 불성실</Col><Col id=\"CD_GUBUN\">(76)</Col><Col id=\"DS_RATE\">1/100</Col><Col id=\"TY_GUBUN\">76</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">매입자 납부특례</Col><Col id=\"DS_GUBUN3\">매입자 납부특례</Col><Col id=\"DS_GUBUN4\">거래계좌 미사용</Col><Col id=\"CD_GUBUN\">(77)</Col><Col id=\"DS_RATE\">뒤쪽참조</Col><Col id=\"TY_GUBUN\">77</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">매입자 납부특례</Col><Col id=\"DS_GUBUN3\">매입자 납부특례</Col><Col id=\"DS_GUBUN4\">거래계좌 지연입금</Col><Col id=\"CD_GUBUN\">(78)</Col><Col id=\"DS_RATE\">뒤쪽참조</Col><Col id=\"TY_GUBUN\">78</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">신용카드매출전표 등 수령명세서 미제출.과다기재</Col><Col id=\"CD_GUBUN\">(79)</Col><Col id=\"TY_GUBUN\">79</Col></Row><Row><Col id=\"DS_GUBUN1\">(26) 가산세액 명세</Col><Col id=\"DS_GUBUN2\">합 계</Col><Col id=\"CD_GUBUN\">(80)</Col><Col id=\"TY_GUBUN\">80</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsText", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDS_REFUND", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">일반환급</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">영세율환급</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">시설투자환급</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_ZERO", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">여</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCD_CORP:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","sta00:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_WORK","ccfCD_DEPT:0.0","10.0","131.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("신고년수/기수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtYY_WORK","staYY_WORK:-10","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_maxlength("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_TAX","ctxtYY_WORK:3","10.0","30","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            obj.set_maxlength("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ctxtNO_TAX:-22","10.0","45","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("기");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("crdoNO_TAX","sta01:20","10.0","107","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsNO_TAX");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_columncount("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_FROM","crdoNO_TAX:-6","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_text("2020-04-04");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","ctxtDT_FROM:-10","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_TO","staDT_WORK:-10","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_autoselect("true");
            obj.set_textAlign("center");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_text("2020-04-04");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","1200","9","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("신고구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","1290","10","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_ccboTY_GUBUN_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboTY_GUBUN_innerdataset", obj);
            divSearch_form_ccboTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">정기신고</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">수정신고</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboTY_GUBUN_innerdataset);
            obj.set_text("정기신고");
            obj.set_value("N");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBgSINGO","104","0","1186","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSINGO00_00_00_00","902","0","95","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSINGO00_00_00","652","0","85","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSINGO00_00","460","0","65","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSINGO00","210","0","105","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSINGO","0","0","105","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Tab("tabData","0","36",null,null,"0","10",null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("1장 앞쪽");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"145\"/><Column size=\"139\"/><Column size=\"125\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" text=\"구분\"/><Cell col=\"4\" text=\"금액\"/><Cell col=\"5\" text=\"세율\"/><Cell col=\"6\" text=\"세액\"/><Cell col=\"7\" text=\"구분코드\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band><Band id=\"body\"><Cell text=\"bind:DS_GUBUN1\" wordWrap=\"char\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DS_GUBUN2\"/><Cell col=\"2\" text=\"bind:DS_GUBUN3\"/><Cell col=\"3\" text=\"bind:CD_GUBUN\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:AM_GUMAK\" edittype=\"text\" maskeditformat=\"###,###,###,###,##0\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"5\" text=\"bind:DS_RATE\" textAlign=\"center\" background=\"#f7f7f7\"/><Cell col=\"6\" text=\"bind:AM_VAT\" edittype=\"text\" displaytype=\"mask\" maskeditformat=\"###,###,###,###,##0\"/><Cell col=\"7\" text=\"bind:TY_GUBUN\"/><Cell col=\"8\" text=\"bind:TY_SALEBUY\"/><Cell col=\"9\" text=\"bind:CD_PROOF\"/></Band></Format></Formats>");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("2장 앞쪽");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","5","5",null,null,"5","5",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList2");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"110\"/><Column size=\"130\"/><Column size=\"150\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"5\" text=\"구분\"/><Cell col=\"5\" text=\"금액\"/><Cell col=\"6\" text=\"세율\"/><Cell col=\"7\" text=\"세액\"/><Cell col=\"8\" text=\"구분코드\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band><Band id=\"body\"><Cell text=\"bind:DS_GUBUN1\" wordWrap=\"char\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DS_GUBUN2\"/><Cell col=\"2\" text=\"bind:DS_GUBUN3\"/><Cell col=\"3\" text=\"bind:DS_GUBUN4\"/><Cell col=\"4\" text=\"bind:CD_GUBUN\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:AM_GUMAK\" edittype=\"text\" maskeditformat=\"###,###,###,###,##0\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"6\" text=\"bind:DS_RATE\" textAlign=\"center\" background=\"#f7f7f7\"/><Cell col=\"7\" text=\"bind:AM_VAT\" edittype=\"text\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"###,###,###,###,##0\"/><Cell col=\"8\" text=\"bind:TY_GUBUN\"/><Cell col=\"9\" text=\"bind:TY_SALEBUY\"/><Cell col=\"10\" text=\"bind:CD_PROOF\"/></Band></Format></Formats>");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);

            obj = new Static("sta00","10","5","85","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("성명(대표자명)");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNM_BOSS","sta00:15","5","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","txtNM_BOSS:20","5","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("사업자등록번호");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_SAUP","sta01:8","5","125","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","txtNO_SAUP:30","5","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("제출일자");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_ENTER","sta02:-14","5","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btn00","799","35","72","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("부가세신고서");
            obj.set_enable("true");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02_00","660","5","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("조기환급구분");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccbDS_REFUND","741","4","129","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsDS_REFUND");
            obj.set_text("cbo00");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02_00_00","905","5","95","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("영세율상호주의");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccbYN_ZERO","1000","4","83","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsYN_ZERO");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("여");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSAUPJA00","1105","0","75","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("마감여부");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_CLOSE","1190","4","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_enable("false");
            var divData_form_rdoYN_CLOSE_innerdataset = new nexacro.NormalDataset("divData_form_rdoYN_CLOSE_innerdataset", obj);
            divData_form_rdoYN_CLOSE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoYN_CLOSE_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtYY_WORK","value","dsSearch","YY_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtNO_TAX","value","dsSearch","NO_TAX1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.crdoNO_TAX","value","dsSearch","NO_TAX2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctxtDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtNM_BOSS","value","dsList3","DS_DAEPYO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.txtNO_SAUP","value","dsList3","NO_SJC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.tclDT_ENTER","value","dsList3","DT_ENTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ccbDS_REFUND","value","dsList3","DS_REFUND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.ccbYN_ZERO","value","dsList3","YN_ZERO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.rdoYN_CLOSE","value","dsList3","YN_CLOSE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_VATMANAGE.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.sYnGrid2Merge = "N";
        this.sEditYn = "N";		// 조회하고 수정가능하게

        var context = "/";
        if (nexacro.getEnvironmentVariable("evContextPath") != undefined) {
        	context = nexacro.getEnvironmentVariable("evContextPath");
        }

        this.fileConfig = {
        	host : this.gfnGetServerUrl(),
        	downloadUrl : context + "file/downloadText.do",
        	allowTypes : ["txt"],
        	maxCount : 1,
        	maxSize : "200MB",
        	maxTotalSize : "200MB"
        };

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	this.dsSearch.setColumn(0, "YY_WORK", this.gfnGetDate().substring(0, 4));
        	this.dsSearch.setColumn(0, "NO_TAX1", "1");
        	this.dsSearch.setColumn(0, "NO_TAX2", "1");
        	this.dsSearch.setColumn(0, "CD_DEPT", this.UserInfo.CD_DEPT_SELFACNT);
        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT")))
        		this.ccfCD_DEPT.form.fnCodeFindLoad();

        	this.fnMagamSetting();
        	this.fnSetMergeCellTitle1();
        };

        this.fnSetButton = function() {

        }

        this.fnSetExtendButton = function() {
        	this.btnCreate = this.gfnFormButtonAdd("Create", "fnCreate");	//자료생성
        	this.btnESingo = this.gfnFormButtonAdd("ESingo", "fnESingo");   //전산매체

        	this.btnAAdisKetFile = this.gfnFormButtonAdd("AAdisKetFile", "fnCreateFile");		// 세금계산서
        	this.btnSingoBillFile = this.gfnFormButtonAdd("SingoBillFile", "fnCreateFile");		//계산서
        	this.btnCreditCardFile = this.gfnFormButtonAdd("CreditCardFile", "fnCreateFile");	// 신용카드

        	this.btnVatControl = this.gfnFormButtonAdd("VatControl", "fnVatControl");

        	this.btnUpjong = this.gfnFormButtonAdd("Upjong", "fnUpjong");  //과세표준
        	this.btnUpjong = this.gfnFormButtonAdd("btnZero", "fnZero"); //영세율상호주의
        	this.btnTaxHomePage = this.gfnFormButtonAdd("TaxHomePage", "fnTaxHomePage"); //국세청 홈택스
        	this.btnClose = this.gfnFormButtonAdd("btnClose", "fnTaxClose");  //마감
        	this.btnCancle = this.gfnFormButtonAdd("btnCancle", "fnCancle");  //마감취소

        	this.btnCreate.set_enable(false);
        	this.btnESingo.set_enable(false);

        	this.btnAAdisKetFile.set_enable(false);
        	this.btnSingoBillFile.set_enable(false);
        	this.btnCreditCardFile.set_enable(false);

        	this.btnUpjong.set_enable(false);
        	this.btnVatControl.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;	// 법인코드
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ctxtYY_WORK = this.divSearch.form.ctxtYY_WORK;
        	this.ctxtNO_TAX = this.divSearch.form.ctxtNO_TAX;
        	this.crdoNO_TAX = this.divSearch.form.crdoNO_TAX;
        	this.ctxtDT_FROM = this.divSearch.form.ctxtDT_FROM;
        	this.ctxtDT_TO = this.divSearch.form.ctxtDT_TO;

        	this.txtNM_BOSS = this.divData.form.txtNM_BOSS;
        	this.txtNO_SAUP = this.divData.form.txtNO_SAUP;
        	this.ctclDT_WORK = this.divData.form.ctclDT_WORK;

        	this.dxGrid = this.divData.form.tabData.tab1.form.objGrid;
        	this.dxGrid2 = this.divData.form.tabData.tab2.form.objGrid2;

        	this.dxGrid.set_cssclass("grd_GC");
        	this.dxGrid2.set_cssclass("grd_GC");

        	this.tabData = this.divData.form.tabData;
        };

        this.fnSetEvent = function() {
        	//this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_VATMANAGE");
        	//this.gfnGridInit(this.dxGrid2, this.dsList2, "DH", "DHV_VATMANAGE_01");

        //  	this.gfnGridColumnColor(this.dxGrid, "DS_GUBUN", "BACK_Footer", "[TY_COLOR]=='BLUE'");
        //  	this.gfnGridColumnColor(this.dxGrid, "CD_GUBUN", "BACK_Footer", "[TY_COLOR]=='BLUE'");
        // 	this.gfnGridColumnColor(this.dxGrid, "DS_RATE", "BACK_Fixed", "[TY_COLOR]=='BLUE'");
        //
        //  	this.gfnGridColumnColor(this.dxGrid, "DS_GUBUN", "BACK_Fixed", "[TY_COLOR]!='BLUE'");
        //  	this.gfnGridColumnColor(this.dxGrid, "CD_GUBUN", "BACK_Fixed", "[TY_COLOR]!='BLUE'");
        // 	this.gfnGridColumnColor(this.dxGrid, "DS_RATE", "BACK_Fixed", "[TY_COLOR]!='BLUE'");
        //
        //  	this.gfnGridColumnColor(this.dxGrid2, "DS_GUBUN", "BACK_Footer", "[TY_COLOR]=='BLUE'");
        //  	this.gfnGridColumnColor(this.dxGrid2, "CD_GUBUN", "BACK_Footer", "[TY_COLOR]=='BLUE'");
        // 	this.gfnGridColumnColor(this.dxGrid2, "DS_RATE", "BACK_Fixed", "[TY_COLOR]=='BLUE'");
        //
        //  	this.gfnGridColumnColor(this.dxGrid2, "DS_GUBUN", "BACK_Fixed", "[TY_COLOR]!='BLUE'");
        //  	this.gfnGridColumnColor(this.dxGrid2, "CD_GUBUN", "BACK_Fixed", "[TY_COLOR]!='BLUE'");
        // 	this.gfnGridColumnColor(this.dxGrid2, "DS_RATE", "BACK_Fixed", "[TY_COLOR]!='BLUE'");
        //
        // 	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.dsList.addEventHandler("onvaluechanged", this.dsList_onvaluechanged, this);
        	this.dsList2.addEventHandler("onvaluechanged", this.dsList2_onvaluechanged, this);
        	this.dsList.addEventHandler("cancolumnchange", this.dsList_cancolumnchange, this);
        }

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("OUT_CD_SELFACNT", "string");
        	this.dsSelect.addColumn("OUT_YR_TAX", "string");
        	this.dsSelect.addColumn("OUT_NO_TAX", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("OUT_CD_SELFACNT", "string");
        	this.dsInsert.addColumn("OUT_YR_TAX", "string");
        	this.dsInsert.addColumn("OUT_NO_TAX", "string");
        	this.dsInsert.addColumn("GB_SINGO2", "string");
        	this.dsInsert.addColumn("GB_SINGO3", "string");
        	this.dsInsert.addColumn("CD_GUBUN", "string");
        	this.dsInsert.addColumn("DS_GUBUN", "string");
        	this.dsInsert.addColumn("DS_RATE", "string");
        	this.dsInsert.addColumn("AM_GUMAK", "bigdecimal");
        	this.dsInsert.addColumn("AM_VAT", "bigdecimal");
        	this.dsInsert.addColumn("DT_START", "string");
        	this.dsInsert.addColumn("DT_END", "string");
        	this.dsInsert.addColumn("DT_ENTER", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_SELFACNT", "string");
        	this.dsCreate.addColumn("YR_TAX", "string");
        	this.dsCreate.addColumn("NO_TAX", "string");
        	this.dsCreate.addColumn("ID_INSERT", "string");

        	this.dsESingo = new Dataset();
        	this.dsESingo.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsESingo.addColumn("YR_TAX", "string");
        	this.dsESingo.addColumn("NO_TAX", "string");
        	this.dsESingo.addColumn("CD_REFUND", "string");
        	this.dsESingo.addColumn("YN_ZERO", "string");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("OUT_CD_SELFACNT", "string");
        	this.dsUpdate.addColumn("OUT_YR_TAX", "string");
        	this.dsUpdate.addColumn("OUT_NO_TAX", "string");
        	this.dsUpdate.addColumn("GB_SINGO2", "string");
        	this.dsUpdate.addColumn("GB_SINGO3", "string");
        	this.dsUpdate.addColumn("DS_REFUND", "string");
        	this.dsUpdate.addColumn("YN_ZERO", "string");

        	this.dsClose = new Dataset();
        	this.dsClose.addColumn("OUT_CD_SELFACNT", "string");
        	this.dsClose.addColumn("OUT_YR_TAX", "string");
        	this.dsClose.addColumn("OUT_NO_TAX", "string");
        	this.dsClose.addColumn("YN_CLOSE", "string");
        	this.dsClose.addColumn("ID_USER", "string");

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	if(this.tabData.tabindex != 0){
        		this.tabData.set_tabindex(0);
        	}

        	this.fnGridClear(this.dxGrid);
        	this.fnGridClear(this.dxGrid2);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "OUT_CD_SELFACNT", this.gfnTrim(this.dsSearch.getColumn(0, "CD_DEPT")));
        	this.dsSelect.setColumn(0, "OUT_YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"));
        	this.dsSelect.setColumn(0, "OUT_NO_TAX", this.fnGetNoTax());

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsListVatManage=select0";
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

        this.fnAdd = function() {
        }

        this.fnDel = function() {
        }

        this.fnSave = function() {

        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.gfnGridValidate(this.dxGrid2)) return;

        	this.dxGrid.updateToDataset();
        	this.dxGrid2.updateToDataset();

        	var noTax = this.fnGetNoTax();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, "TY_GUBUN") != "271"){
        			var nrow = this.dsInsert.addRow();
        			this.dsInsert.setColumn(nrow, "OUT_CD_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        			this.dsInsert.setColumn(nrow, "OUT_YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"))
        			this.dsInsert.setColumn(nrow, "OUT_NO_TAX", noTax);
        			//this.dsInsert.setColumn(nrow, "GB_SINGO2", this.dsList.getColumn(i, "GB_SINGO2"));
        			//this.dsInsert.setColumn(nrow, "GB_SINGO3", this.dsList.getColumn(i, "GB_SINGO3"));
        			//this.dsInsert.setColumn(nrow, "CD_GUBUN", this.dsList.getColumn(i, "CD_GUBUN"));
        			this.dsInsert.setColumn(nrow, "CD_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        			//this.dsInsert.setColumn(nrow, "DS_GUBUN", this.dsList.getColumn(i, "DS_GUBUN"));
        			this.dsInsert.setColumn(nrow, "DS_RATE", this.dsList.getColumn(i, "DS_RATE"));
        			this.dsInsert.setColumn(nrow, "AM_GUMAK", this.dsList.getColumn(i, "AM_GUMAK"));
        			this.dsInsert.setColumn(nrow, "AM_VAT", this.dsList.getColumn(i, "AM_VAT"));
        			this.dsInsert.setColumn(nrow, "DT_START", nexacro.replaceAll(this.gfnNvl(this.dsSearch.getColumn(0, "DT_FROM")), "-", ""));
        			this.dsInsert.setColumn(nrow, "DT_END", nexacro.replaceAll(this.gfnNvl(this.dsSearch.getColumn(0, "DT_TO")), "-", ""));
        			this.dsInsert.setColumn(nrow, "DT_ENTER", nexacro.replaceAll(this.gfnNvl(this.dsList3.getColumn(0, "DT_ENTER")), "-", ""));
        			this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        		}
        	}

        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var nrow = this.dsInsert.addRow();
        		this.dsInsert.setColumn(nrow, "OUT_CD_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        		this.dsInsert.setColumn(nrow, "OUT_YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"))
        		this.dsInsert.setColumn(nrow, "OUT_NO_TAX", noTax);
        		//this.dsInsert.setColumn(nrow, "GB_SINGO2", this.dsList2.getColumn(i, "GB_SINGO2"));
        		//this.dsInsert.setColumn(nrow, "GB_SINGO3", this.dsList2.getColumn(i, "GB_SINGO3"));
        		//this.dsInsert.setColumn(nrow, "CD_GUBUN", this.dsList2.getColumn(i, "CD_GUBUN"));
        		this.dsInsert.setColumn(nrow, "CD_GUBUN", this.dsList2.getColumn(i, "TY_GUBUN"));
        		//this.dsInsert.setColumn(nrow, "DS_GUBUN", this.dsList2.getColumn(i, "DS_GUBUN"));
        		this.dsInsert.setColumn(nrow, "DS_RATE", this.dsList2.getColumn(i, "DS_RATE"));
        		this.dsInsert.setColumn(nrow, "AM_GUMAK", this.dsList2.getColumn(i, "AM_GUMAK"));
        		this.dsInsert.setColumn(nrow, "AM_VAT", this.dsList2.getColumn(i, "AM_VAT"));
        		this.dsInsert.setColumn(nrow, "DT_START", nexacro.replaceAll(this.gfnNvl(this.dsSearch.getColumn(0, "DT_FROM")), "-", ""));
        		this.dsInsert.setColumn(nrow, "DT_END", nexacro.replaceAll(this.gfnNvl(this.dsSearch.getColumn(0, "DT_TO")), "-", ""));
        		this.dsInsert.setColumn(nrow, "DT_ENTER", nexacro.replaceAll(this.gfnNvl(this.dsList3.getColumn(0, "DT_ENTER")), "-", ""));
        		this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        	}

        	if (this.sEditYn == "Y")
        	{
        		var nrow = this.dsUpdate.addRow();
        		this.dsUpdate.setColumn(nrow, "OUT_CD_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        		this.dsUpdate.setColumn(nrow, "OUT_YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"))
        		this.dsUpdate.setColumn(nrow, "OUT_NO_TAX", noTax);
        		//this.dsUpdate.setColumn(nrow, "GB_SINGO2", this.dsList.getColumn(i, "GB_SINGO2"));
        		//this.dsUpdate.setColumn(nrow, "GB_SINGO3", this.dsList.getColumn(i, "GB_SINGO3"));
        		this.dsUpdate.setColumn(nrow, "DS_REFUND", this.dsList3.getColumn(0, "DS_REFUND"));
        		this.dsUpdate.setColumn(nrow, "YN_ZERO", this.dsList3.getColumn(0, "YN_ZERO"));
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate";
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

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {

        	this.dsReport.clear();
        	for(var i=0;i<this.dsList.rowcount;i++){
        		var sTyGubun = this.dsList.getColumn(i, "TY_GUBUN");
        		this.dsReport.addColumn("AM_GUMAK_"+sTyGubun, "string");
        		this.dsReport.addColumn("AM_VAT_"+sTyGubun, "string");
        	}

        	//this.dsReport.appendData(this.dsList);
        	//this.dsReport.appendData(this.dsList2);

        	trace(this.dsReport.saveXML());

        	return false;

        	//DHV_VATMANAGEPREVIEW
         	var inProc		= "_dsProc";
         	var inParam 	= "params=dsReport";			// 조회SP이외 사용할 정보
         	var inData      = "";	//   select=dsSelect
         	var reportpath  = "/dh/dhv/DHV_VATMANAGE.ozr";

         	gfnOpenReport(this, reportpath, inProc, inParam, inData);


        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("세무단위를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YY_WORK"))) {
        		this.fnVaidateCallback = function() {
        			this.ctxtYY_WORK.setFocus();
        		}
        		this.gfnAlert("신고년도를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_TAX1"))) {
        		this.fnVaidateCallback = function() {
        			this.ctxtNO_TAX.setFocus();
        		}
        		this.gfnAlert("기수를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.dsSearch.getColumn(0, "NO_TAX1") != "1" && this.dsSearch.getColumn(0, "NO_TAX1") != "2") {
        		this.fnVaidateCallback = function() {
        			this.ctxtNO_TAX.setFocus();
        		}
        		this.gfnAlert("기수는 1 또는 2만 입력가능합니다.", "fnVaidateCallback");
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if (svcID == "select") {

         		this.gfnGridAfterSelect(this.dxGrid);
         		this.gfnGridAfterSelect(this.dxGrid2);

        		// TAB 1
        		this.dxGrid.set_enableevent(false);
        		this.dsList.set_enableevent(false);

        		for (var i=0; i<this.dsList.rowcount; i++) {
        			if (this.dsListVatManage.rowcount > 0) {
        			var chkNum = this.dsList.getColumn(i, "TY_GUBUN");
        				for (var k=0; k<this.dsListVatManage.rowcount; k++) {
        					var NO_SORT = this.dsListVatManage.getColumn(k, "NO_SORT");
        					var AM_SUPPLY = this.dsListVatManage.getColumn(k, "AM_SUPPLY");
        					var AM_VAT = this.dsListVatManage.getColumn(k, "AM_VAT");

        					var TY_SALEBUY = this.dsListVatManage.getColumn(k, "TY_SALEBUY");
        					var CD_PROOF = this.dsListVatManage.getColumn(k, "CD_PROOF");

        					if( chkNum == NO_SORT){
        						this.dsList.setColumn(i, "AM_GUMAK", AM_SUPPLY);
        						this.dsList.setColumn(i, "AM_VAT", AM_VAT);
        						this.dsList.setColumn(i, "TY_SALEBUY", TY_SALEBUY);
        						this.dsList.setColumn(i, "CD_PROOF", CD_PROOF);
        					}

        					AM_SUPPLY = "";
        					AM_VAT = "";
        					TY_SALEBUY = "";
        					CD_PROOF = "";
        				}
        			}
        			this.dsList.setColumn(i, "YN_EDIT", "Y");
        		}

        		// 총괄 납부 사업자가 납부할 세액(환급받을 세액)
        		var nRow27 = this.dsList.findRow( "TY_GUBUN", "27" );
        		var nRow271 = this.dsList.findRow( "TY_GUBUN", "271" );
        		var nAm = this.dsList.getColumn(nRow27, "AM_VAT");
        		this.dsList.setColumn(nRow271, "AM_VAT", nAm);

        		this.dsList.set_enableevent(true);
        		this.dxGrid.set_enableevent(true);

        		// TAB 2
        		this.dxGrid2.set_enableevent(false);
        		this.dsList2.set_enableevent(false);

        		for (var j=0; j<this.dsList2.rowcount; j++) {
        			if (this.dsListVatManage.rowcount > 0) {
        				var chkNum = this.dsList2.getColumn(j, "TY_GUBUN");

        				for (var h=0; h<this.dsListVatManage.rowcount; h++) {
        					var NO_SORT = this.dsListVatManage.getColumn(h, "NO_SORT");
        					var AM_SUPPLY = this.dsListVatManage.getColumn(h, "AM_SUPPLY");
        					var AM_VAT = this.dsListVatManage.getColumn(h, "AM_VAT");
        					var TY_SALEBUY = this.dsListVatManage.getColumn(h, "TY_SALEBUY");
        					var CD_PROOF = this.dsListVatManage.getColumn(h, "CD_PROOF");
        					if( chkNum == NO_SORT){

        						this.dsList2.setColumn(j, "TY_SALEBUY", TY_SALEBUY);
        						this.dsList2.setColumn(j, "CD_PROOF", CD_PROOF);
        						this.dsList2.setColumn(j, "AM_GUMAK", AM_SUPPLY);
        						this.dsList2.setColumn(j, "AM_VAT", AM_VAT);
        					}
        					AM_SUPPLY = "";
        					AM_VAT = "";
        					TY_SALEBUY = "";
        					CD_PROOF = "";
        				}
        			}
        			this.dsList2.setColumn(j, "YN_EDIT", "Y");
        		}

        		this.dxGrid2.set_enableevent(true);
        		this.dsList2.set_enableevent(true);

        		this.dsList3.set_enableevent(false);

        		if (this.dsListVatManage.rowcount > 0) {
        			this.dsList3.addRow();
        			var sDtEnter = this.gfnNvl(this.gfnTrim(this.dsListVatManage.getColumn(0, "DT_ENTER")),"") == "" ? this.gfnGetDate() : this.dsListVatManage.getColumn(0, "DT_ENTER");
        			this.dsList3.setColumn(0, "DS_DAEPYO", this.dsListVatManage.getColumn(0, "DS_DAEPYO"));
        			this.dsList3.setColumn(0, "NO_SJC", this.dsListVatManage.getColumn(0, "NO_SJC"));
        			this.dsList3.setColumn(0, "DT_ENTER", sDtEnter);
        			this.dsList3.setColumn(0, "DS_REFUND", this.dsListVatManage.getColumn(0, "DS_REFUND"));
        			this.dsList3.setColumn(0, "YN_ZERO",this.dsListVatManage.getColumn(0, "YN_ZERO"));
        			this.dsList3.setColumn(0, "YN_CLOSE",this.dsListVatManage.getColumn(0, "YN_CLOSE"));
        		}
        		else {
        			this.dsList3.setColumn(0, "DS_DAEPYO", "");
        			this.dsList3.setColumn(0, "NO_SJC", "");
        			this.dsList3.setColumn(0, "DT_ENTER", "");
        			this.dsList3.setColumn(0, "DT_ENTER", "1");
        			this.dsList3.setColumn(0, "YN_ZERO", "Y");
        			this.dsList3.setColumn(0, "YN_ZERO", "N");
        		}
        		this.sEditYn = "N";
        		this.dsList3.set_enableevent(true);

         		cnt = 0;
         		if (nexacro.toNumber(this.dsList.getColumn(0, "CNT")) > 0)
         			cnt = 1;

         		if (nexacro.toNumber(this.dsList.getColumn(0, "CNT")) == 0) {
         			var msg = this.dsSearch.getColumn(0, "YY_WORK") + "년/" + this.dsSearch.getColumn(0, "NO_TAX1") + "기 " + (this.dsSearch.getColumn(0, "NO_TAX2") == "1" ? "예정" : "확정") + " 신고서 자료가 존재하지 않습니다. \n자료생성 하세요!";
         			this.gfnAlert(msg);
         		}

        		//this.gfnSetFormStatus(this);

        // 		if (cnt == 1 && !this.FormBtns.Save.enable) {
        // 			this.btnESingo.set_enable(true);
        // 			this.btnUpjong.set_enable(true);
        // 		}
        // 		else {
        // 			this.btnESingo.set_enable(false);
        // 			this.btnUpjong.set_enable(false);
        // 		}

        		this.btnCreate.set_enable(true);
        		this.btnVatControl.set_enable(true);
        		this.fnReadOnly(this.dsList3.getColumn(0, "YN_CLOSE"));
        		this.fnSetMergeCellTitle1();
        		this.fnSetMergeCellTitle2();
        		this.gfnSetFormStatus(this, "Q");
        		this.FormBtns.Save.set_enable(false); // 저장 버튼 비활성화 수정후 활성화 되게 변경처리
        	}
        	else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "create") {
        		if (errorCode == 0) {
        			this.fnExecute_callback = function() {
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("자료생성 작업이 완료되었습니다.", "fnExecute_callback");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if (svcID == "close") { //마감
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if (svcID == "esingo") {
        		if (errorCode == 0) {
        			if (this.dsText.rowcount == 0) {
        				this.gfnAlert("생성할 자료가 존재하지 않습니다.");
        			}

        			var data="";
        			for (var i=0; i<this.dsText.rowcount; i++) {
        				data += this.dsText.getColumn(i, "CONTENT");
        				if (i == this.dsText.rowcount -1) {
        					;
        				}
        				else {
        					data += "\n";
        				}
        			}

        			var sFilename = this.gfnGetDate() + ".101";
        			var sFilecont = data;
        			var encodeFileName = encodeURIComponent(sFilename);

        			var surl = this.fileConfig.host+ this.fileConfig.downloadUrl; // + encodeFileName;
        			this.FileDownTransfer00.set_url(surl);
        			this.FileDownTransfer00.setPostData("fileCont", sFilecont);
        			this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        			this.FileDownTransfer00.setPostData("fileEncoding", "EUC-KR");

        			if( system.navigatorname =="nexacro"){
        				this.FileDownTransfer00.set_downloadfilename(sFilename);
        			}
        			this.FileDownTransfer00.download();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        			break;

        		case "ccfCD_DEPT": // 세무단위
        			if (this.gfnIsNull(cdCorp)) {
        				this.gfnAlert("법인코드를 먼저 선택하세요.");
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        			//dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVLV_DEPT_ACNT);
        			break;
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			this.ccfCD_DEPT.form.fnCodeFindClear();
        			break;
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {

        		this.gfnSetFormStatus(this, "U");

        		var sTyGubun = obj.getColumn(e.row,"TY_GUBUN");

        		// 금액 / 세액
        		if(e.columnid == "AM_VAT" || e.columnid == "AM_GUMAK"){

        			// [9㉮] 과세표준 및 매출세액 (금액/세액) 합계
        			if(sTyGubun >= "1" && sTyGubun <= "8"){

        				var nRow1 = obj.findRow( "TY_GUBUN", "1" );	// 과세 세금계산서 발급분	(1)
        				var nRow2 = obj.findRow( "TY_GUBUN", "2" ); // 과세 매입자발행 세금계산서	(2)
        				var nRow3 = obj.findRow( "TY_GUBUN", "3" ); // 과세 신용카드ㆍ현금영수증 발행분	(3)
        				var nRow4 = obj.findRow( "TY_GUBUN", "4" ); // 과세 기타(정규영수증 외 매출분)	(4)
        				var nRow5 = obj.findRow( "TY_GUBUN", "5" ); // 영세율 세금계산서 발급분	(5)
        				var nRow6 = obj.findRow( "TY_GUBUN", "6" ); // 영세율 기 타	(6)
        				var nRow7 = obj.findRow( "TY_GUBUN", "7" ); // 예 정 신 고 누 락 분 	(7)
        				var nRow8 = obj.findRow( "TY_GUBUN", "8" ); // 대 손 세 액 가 감 	(8)
        				var nRow9 = obj.findRow( "TY_GUBUN", "9" );	// 과세표준 및 매출세액 합계

        				var nAm1 = nexacro.toNumber(obj.getColumn(nRow1, e.columnid) ,0);
        				var nAm2 = nexacro.toNumber(obj.getColumn(nRow2, e.columnid) ,0);
        				var nAm3 = nexacro.toNumber(obj.getColumn(nRow3, e.columnid) ,0);
        				var nAm4 = nexacro.toNumber(obj.getColumn(nRow4, e.columnid) ,0);
        				var nAm5 = nexacro.toNumber(obj.getColumn(nRow5, e.columnid) ,0);
        				var nAm6 = nexacro.toNumber(obj.getColumn(nRow6, e.columnid) ,0);
        				var nAm7 = nexacro.toNumber(obj.getColumn(nRow7, e.columnid) ,0);
        				var nAm8 = nexacro.toNumber(obj.getColumn(nRow8, e.columnid) ,0);
        				var nAm9 = nAm1 + nAm2 + nAm3 + nAm4 + nAm5 + nAm6 + nAm7 + nAm8;

        				obj.setColumn(nRow9, e.columnid , nexacro.toNumber(nAm9));

        			}

        			// [15] 매입 세액 합계(10)-(10-1)+(11)+(12)+(13)+(14)
        			if(sTyGubun >= "10" && sTyGubun <= "14"){

        				var nRow10 = obj.findRow( "TY_GUBUN", "10" );		// 세금계산서 수취분 일 반 매 입(10)
        				var nRow10_1 = obj.findRow( "TY_GUBUN", "10_1" );   // 세금계산서 수취분 수출기업 수입분 납부유예(10-1)
        				var nRow11 = obj.findRow( "TY_GUBUN", "11" );       // 세금계산서 수취분 고정자산 매입(11)
        				var nRow12 = obj.findRow( "TY_GUBUN", "12" );       // 예 정 신 고 누 락 분 (12)
        				var nRow13 = obj.findRow( "TY_GUBUN", "13" );       // 매입자발행 세금계산서 (13)
        				var nRow14 = obj.findRow( "TY_GUBUN", "14" );       // 그 밖의 공제매입세액 (14)

        				var nRow15 = obj.findRow( "TY_GUBUN", "15" );       // 매입세액합계(10)-(10-1)+(11)+(12)+(13)+(14)

        				var nAm10 = nexacro.toNumber(obj.getColumn(nRow10, e.columnid) ,0);
        				var nAm10_1 = nexacro.toNumber(obj.getColumn(nRow10_1, e.columnid) ,0);
        				var nAm11 = nexacro.toNumber(obj.getColumn(nRow11, e.columnid) ,0);
        				var nAm12 = nexacro.toNumber(obj.getColumn(nRow12, e.columnid) ,0);
        				var nAm13 = nexacro.toNumber(obj.getColumn(nRow13, e.columnid) ,0);
        				var nAm14 = nexacro.toNumber(obj.getColumn(nRow14, e.columnid) ,0);
        				var nAm15 = nAm10 - nAm10_1 + nAm11 + nAm12 + nAm13 + nAm14;

        				obj.setColumn(nRow15, e.columnid , nexacro.toNumber(nAm15));

        			}

        			// [17㉯] 매입세액 차 감 계 (15)-(16)
        			if(sTyGubun == "15" || sTyGubun == "16"){

        				var nRow15 = obj.findRow( "TY_GUBUN", "15" );	// 매입세액합계(10)-(10-1)+(11)+(12)+(13)+(14)
        				var nRow16 = obj.findRow( "TY_GUBUN", "16" );	// 공제받지 못할 매입세액
        				var nRow17 = obj.findRow( "TY_GUBUN", "17" );	// 차 감 계 (15)-(16)

        				var nAm15 = nexacro.toNumber(obj.getColumn(nRow15, e.columnid) ,0);
        				var nAm16 = nexacro.toNumber(obj.getColumn(nRow16, e.columnid) ,0);
        				var nAm17 = nAm15 - nAm16;

        				obj.setColumn(nRow17, e.columnid , nexacro.toNumber(nAm17));

        			}

        			// [20㉱] 경감ㆍ공제세액 합계
        			if(sTyGubun == "18" || sTyGubun == "19"){

        				var nRow18 = obj.findRow( "TY_GUBUN", "18" );	// 그 밖의 경감ㆍ공제세액
        				var nRow19 = obj.findRow( "TY_GUBUN", "19" );	// 신용카드매출전표등 발행공제 등
        				var nRow20 = obj.findRow( "TY_GUBUN", "20" );	// 경감ㆍ공제세액 합계 (18+19)

        				var nAm18 = nexacro.toNumber(obj.getColumn(nRow18, e.columnid) ,0);
        				var nAm19 = nexacro.toNumber(obj.getColumn(nRow19, e.columnid) ,0);
        				var nAm20 = nAm18 + nAm19;

        				obj.setColumn(nRow20, e.columnid , nexacro.toNumber(nAm20));

        			}
        		}

        		// [171㉰] 납부(환급)세액 (매출세액㉮-매입세액㉯) 세액
        		if(e.columnid == "AM_VAT" && (sTyGubun == "9" || sTyGubun == "17")){
        			//trace("sTyGubun->"+ sTyGubun);
        			var nRow9 = obj.findRow( "TY_GUBUN", "9" );		// 과세표준및매출세액 합계 ㉮
        			var nRow17 = obj.findRow( "TY_GUBUN", "17" );	// 매입세액차감계 (15)-(16) ㉯
        			var nRow171 = obj.findRow( "TY_GUBUN", "171" );	// 납부(환급)세액 (매출세액㉮-매입세액㉯)

        			var nAmVat9 = nexacro.toNumber(obj.getColumn(nRow9, "AM_VAT") ,0);
        			var nAmVat17 = nexacro.toNumber(obj.getColumn(nRow17, "AM_VAT") ,0);
        			var nAmVat171 = nexacro.toNumber((nAmVat9 - nAmVat17));

        			obj.setColumn(nRow171, "AM_VAT" , nAmVat171);
        		}

        		// 세액
        		if(e.columnid == "AM_VAT"){
        			// [27] 차감ㆍ가감하여 납부할 세액(환급받을 세액)(㉰-㉱-㉲-㉳-㉴-㉵-㉶-㉷+㉸)
        			if(sTyGubun == "171" || sTyGubun == "20-1" || (sTyGubun >= "20" && sTyGubun <= "26")  ){
        				var nRow171 = obj.findRow( "TY_GUBUN", "171" );		// ㉰ 납부(환급)세액 (매출세액㉮-매입세액㉯) (171)
        				var nRow20 = obj.findRow( "TY_GUBUN", "20" );		// ㉱ 경감ㆍ공제세액 합계 (20)
        				var nRow20_1 = obj.findRow( "TY_GUBUN", "20-1" );	// ㉲ 소규모 개인사업자 부가가치세 감면세액	(20-1)
        				var nRow21 = obj.findRow( "TY_GUBUN", "21" );		// ㉳ 예 정 신 고 미 환 급 세 액	(21)
        				var nRow22 = obj.findRow( "TY_GUBUN", "22" );		// ㉴ 예 정 고 지 세 액	(22)
        				var nRow23 = obj.findRow( "TY_GUBUN", "23" );		// ㉵ 사업양수자가 대리납부한 세액	(23)
        				var nRow24 = obj.findRow( "TY_GUBUN", "24" );		// ㉶ 매입자 납부특례에 따라 납부한 세액	(24)
        				var nRow25 = obj.findRow( "TY_GUBUN", "25" );		// ㉷ 신용카드업자가 대리납부한 세액	(25)
        				var nRow26 = obj.findRow( "TY_GUBUN", "26" );		// ㉸ 가 산 세 액 계	(26)
        				var nRow27 = obj.findRow( "TY_GUBUN", "27" );		// 차감ㆍ가감하여 납부할 세액(환급받을 세액)(㉰-㉱-㉲-㉳-㉴-㉵-㉶-㉷+㉸) (27)
        				var nRow271 = this.dsList.findRow( "TY_GUBUN", "271" );

        				var nAmVat171 = nexacro.toNumber(obj.getColumn(nRow171, "AM_VAT") ,0);
        				var nAmVat20 = nexacro.toNumber(obj.getColumn(nRow20, "AM_VAT") ,0);
        				var nAmVat20_1 = nexacro.toNumber(obj.getColumn(nRow20_1, "AM_VAT") ,0);
        				var nAmVat21 = nexacro.toNumber(obj.getColumn(nRow21, "AM_VAT") ,0);
        				var nAmVat22 = nexacro.toNumber(obj.getColumn(nRow22, "AM_VAT") ,0);
        				var nAmVat23 = nexacro.toNumber(obj.getColumn(nRow23, "AM_VAT") ,0);
        				var nAmVat24 = nexacro.toNumber(obj.getColumn(nRow24, "AM_VAT") ,0);
        				var nAmVat25 = nexacro.toNumber(obj.getColumn(nRow25, "AM_VAT") ,0);
        				var nAmVat26 = nexacro.toNumber(obj.getColumn(nRow26, "AM_VAT") ,0);

        				var nAmVat27 = nexacro.toNumber((nAmVat171 - nAmVat20 - nAmVat20_1 - nAmVat21 - nAmVat22 - nAmVat23 - nAmVat24 - nAmVat25 + nAmVat26));
        				//trace("합계 : " + nAmVat171 + "-" + nAmVat20 +"-"+ nAmVat20_1 +"-"+  nAmVat21 +"-"+  nAmVat22 +"-"+  nAmVat23 +"-"+  nAmVat24 +"-"+  nAmVat25 +"+"+  nAmVat26  +"= "+  nAmVat27 );

        				obj.setColumn(nRow27, "AM_VAT" , nAmVat27);
        				obj.setColumn(nRow271, "AM_VAT", nAmVat27);
        			}
        		}
        	}
        }

        this.dsList2_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this, "U");

        		var sTyGubun = obj.getColumn(e.row,"TY_GUBUN");

        		// 금액 / 세액
        		if(e.columnid == "AM_VAT" || e.columnid == "AM_GUMAK"){

        			// [37] 예정신고 누 락 분 명세 (7)매출 합계
        			if(sTyGubun >= "33" && sTyGubun <= "36"){
        				var nRow33 = obj.findRow( "TY_GUBUN", "33" );
        				var nRow34 = obj.findRow( "TY_GUBUN", "34" );
        				var nRow35 = obj.findRow( "TY_GUBUN", "35" );
        				var nRow36 = obj.findRow( "TY_GUBUN", "36" );
        				var nRow37 = obj.findRow( "TY_GUBUN", "37" );

        				var nAm33 = nexacro.toNumber(obj.getColumn(nRow33, e.columnid) ,0);
        				var nAm34 = nexacro.toNumber(obj.getColumn(nRow34, e.columnid) ,0);
        				var nAm35 = nexacro.toNumber(obj.getColumn(nRow35, e.columnid) ,0);
        				var nAm36 = nexacro.toNumber(obj.getColumn(nRow36, e.columnid) ,0);

        				var nAm37 = nAm33 + nAm34 + nAm35 + nAm36;

        				obj.setColumn(nRow37, e.columnid , nexacro.toNumber(nAm37));

        			}

        			// [14] 그 밖의 공제매입세액
        			if(sTyGubun == "37"){

        				var nRow37 = obj.findRow( "TY_GUBUN", "37" );	// // [37] 예정신고 누 락 분 명세 (7)매출 합계
        				var nRow7 = this.dsList.findRow( "TY_GUBUN", "7" );

        				var nAm37 = nexacro.toNumber(obj.getColumn(nRow37, e.columnid) ,0);

        				this.dsList.setColumn(nRow7, e.columnid , nexacro.toNumber(nAm37));
        			}

        			// [40] 예정신고 누 락 분 명세 (12)매입 합계
        			if(sTyGubun >= "38" && sTyGubun <= "39"){
        				var nRow38 = obj.findRow( "TY_GUBUN", "38" );
        				var nRow39 = obj.findRow( "TY_GUBUN", "39" );
        				var nRow40 = obj.findRow( "TY_GUBUN", "40" );

        				var nAm38 = nexacro.toNumber(obj.getColumn(nRow38, e.columnid) ,0);
        				var nAm39 = nexacro.toNumber(obj.getColumn(nRow39, e.columnid) ,0);

        				var nAm40 = nAm38 + nAm39;

        				obj.setColumn(nRow40, e.columnid , nexacro.toNumber(nAm40));

        			}

        			// [12] 매입세액 예정신고 누락분
        			if(sTyGubun == "40"){

        				var nRow40 = obj.findRow( "TY_GUBUN", "40" );	// [40] 예정신고 누 락 분 명세 (12)매입 합계
        				var nRow12 = this.dsList.findRow( "TY_GUBUN", "12" );

        				var nAm40 = nexacro.toNumber(obj.getColumn(nRow40, e.columnid) ,0);

        				this.dsList.setColumn(nRow12, e.columnid, nexacro.toNumber(nAm40));
        			}

        			// [49] (14) 그 밖의 공 제 매 입 세 액 명세	합 계
        			if(sTyGubun >= "41" && sTyGubun <= "48"){
        				var nRow41 = obj.findRow( "TY_GUBUN", "41" );
        				var nRow42 = obj.findRow( "TY_GUBUN", "42" );
        				var nRow43 = obj.findRow( "TY_GUBUN", "43" );
        				var nRow44 = obj.findRow( "TY_GUBUN", "44" );
        				var nRow45 = obj.findRow( "TY_GUBUN", "45" );
        				var nRow46 = obj.findRow( "TY_GUBUN", "46" );
        				var nRow47 = obj.findRow( "TY_GUBUN", "47" );
        				var nRow48 = obj.findRow( "TY_GUBUN", "48" );
        				var nRow49 = obj.findRow( "TY_GUBUN", "49" );

        				var nAm41 = nexacro.toNumber(obj.getColumn(nRow41, e.columnid) ,0);
        				var nAm42 = nexacro.toNumber(obj.getColumn(nRow42, e.columnid) ,0);
        				var nAm43 = nexacro.toNumber(obj.getColumn(nRow43, e.columnid) ,0);
        				var nAm44 = nexacro.toNumber(obj.getColumn(nRow44, e.columnid) ,0);
        				var nAm45 = nexacro.toNumber(obj.getColumn(nRow45, e.columnid) ,0);
        				var nAm46 = nexacro.toNumber(obj.getColumn(nRow46, e.columnid) ,0);
        				var nAm47 = nexacro.toNumber(obj.getColumn(nRow47, e.columnid) ,0);
        				var nAm48 = nexacro.toNumber(obj.getColumn(nRow48, e.columnid) ,0);

        				var nAm49 = nAm41 + nAm42 + nAm43 + nAm44 + nAm45 + nAm46 + nAm47 + nAm48;

        				obj.setColumn(nRow49, e.columnid , nexacro.toNumber(nAm49));
        			}

        			// [14] 그 밖의 공제매입세액
        			if(sTyGubun == "49"){

        				var nRow49 = obj.findRow( "TY_GUBUN", "49" );	//  [49] (14) 그 밖의 공 제 매 입 세 액 명세	합 계
        				var nRow14 = this.dsList.findRow( "TY_GUBUN", "14" );

        				var nAm49 = nexacro.toNumber(obj.getColumn(nRow49, e.columnid) ,0);

        				this.dsList.setColumn(nRow14, e.columnid , nexacro.toNumber(nAm49));
        			}

        			// [53] (16) 공제받지 못할 매입세액 명세	합 계
        			if(sTyGubun >= "50" && sTyGubun <= "52"){

        				var nRow50 = obj.findRow( "TY_GUBUN", "50" );
        				var nRow51 = obj.findRow( "TY_GUBUN", "51" );
        				var nRow52 = obj.findRow( "TY_GUBUN", "52" );
        				var nRow53 = obj.findRow( "TY_GUBUN", "53" );

        				var nAm50 = nexacro.toNumber(obj.getColumn(nRow50, e.columnid) ,0);
        				var nAm51 = nexacro.toNumber(obj.getColumn(nRow51, e.columnid) ,0);
        				var nAm52 = nexacro.toNumber(obj.getColumn(nRow52, e.columnid) ,0);

        				var nAm53 = nAm50 + nAm51 + nAm52;

        				obj.setColumn(nRow53, e.columnid , nexacro.toNumber(nAm53));

        			}

        			// [16] 공제받지 못할 매입세액
        			if(sTyGubun == "53"){

        				var nRow53 = obj.findRow( "TY_GUBUN", "53" );	// [53] (16) 공제받지 못할 매입세액 명세	합 계
        				var nRow16 = this.dsList.findRow( "TY_GUBUN", "16" );

        				var nAm53 = nexacro.toNumber(obj.getColumn(nRow53, e.columnid) ,0);

        				this.dsList.setColumn(nRow16, e.columnid , nexacro.toNumber(nAm53));
        			}

        			// [79] (26) 가산세액 명세	합 계
        			if(sTyGubun >= "61" && sTyGubun <= "79"){
        				var nRow61 = obj.findRow( "TY_GUBUN", "61" );
        				var nRow62 = obj.findRow( "TY_GUBUN", "62" );
        				var nRow63 = obj.findRow( "TY_GUBUN", "63" );
        				var nRow64 = obj.findRow( "TY_GUBUN", "64" );
        				var nRow65 = obj.findRow( "TY_GUBUN", "65" );
        				var nRow66 = obj.findRow( "TY_GUBUN", "66" );
        				var nRow67 = obj.findRow( "TY_GUBUN", "67" );
        				var nRow68 = obj.findRow( "TY_GUBUN", "68" );
        				var nRow69 = obj.findRow( "TY_GUBUN", "69" );
        				var nRow70 = obj.findRow( "TY_GUBUN", "70" );
        				var nRow71 = obj.findRow( "TY_GUBUN", "71" );
        				var nRow72 = obj.findRow( "TY_GUBUN", "72" );
        				var nRow73 = obj.findRow( "TY_GUBUN", "73" );
        				var nRow74 = obj.findRow( "TY_GUBUN", "74" );
        				var nRow75 = obj.findRow( "TY_GUBUN", "75" );
        				var nRow76 = obj.findRow( "TY_GUBUN", "76" );
        				var nRow77 = obj.findRow( "TY_GUBUN", "77" );
        				var nRow78 = obj.findRow( "TY_GUBUN", "78" );
        				var nRow79 = obj.findRow( "TY_GUBUN", "79" );
        				var nRow80 = obj.findRow( "TY_GUBUN", "80" );

        				var nAm61 = nexacro.toNumber(obj.getColumn(nRow61, e.columnid) ,0);
        				var nAm62 = nexacro.toNumber(obj.getColumn(nRow62, e.columnid) ,0);
        				var nAm63 = nexacro.toNumber(obj.getColumn(nRow63, e.columnid) ,0);
        				var nAm64 = nexacro.toNumber(obj.getColumn(nRow64, e.columnid) ,0);
        				var nAm65 = nexacro.toNumber(obj.getColumn(nRow65, e.columnid) ,0);
        				var nAm66 = nexacro.toNumber(obj.getColumn(nRow66, e.columnid) ,0);
        				var nAm67 = nexacro.toNumber(obj.getColumn(nRow67, e.columnid) ,0);
        				var nAm68 = nexacro.toNumber(obj.getColumn(nRow68, e.columnid) ,0);
        				var nAm69 = nexacro.toNumber(obj.getColumn(nRow69, e.columnid) ,0);
        				var nAm70 = nexacro.toNumber(obj.getColumn(nRow70, e.columnid) ,0);
        				var nAm71 = nexacro.toNumber(obj.getColumn(nRow71, e.columnid) ,0);
        				var nAm72 = nexacro.toNumber(obj.getColumn(nRow72, e.columnid) ,0);
        				var nAm73 = nexacro.toNumber(obj.getColumn(nRow73, e.columnid) ,0);
        				var nAm74 = nexacro.toNumber(obj.getColumn(nRow74, e.columnid) ,0);
        				var nAm75 = nexacro.toNumber(obj.getColumn(nRow75, e.columnid) ,0);
        				var nAm76 = nexacro.toNumber(obj.getColumn(nRow76, e.columnid) ,0);
        				var nAm77 = nexacro.toNumber(obj.getColumn(nRow77, e.columnid) ,0);
        				var nAm78 = nexacro.toNumber(obj.getColumn(nRow78, e.columnid) ,0);
        				var nAm79 = nexacro.toNumber(obj.getColumn(nRow79, e.columnid) ,0);

        				var nAm80 = nAm61 + nAm62 + nAm63 + nAm64 + nAm65 + nAm66 + nAm67
        						  + nAm68 + nAm69 + nAm70 + nAm71 + nAm72 + nAm73 + nAm74
        						  + nAm75 + nAm76 + nAm77 + nAm78 + nAm79;

        				obj.setColumn(nRow80, e.columnid , nexacro.toNumber(nAm80));

        			}

        			// [26㉸] 가 산 세 액 계
        			if(sTyGubun == "80"){

        				var nRow80 = obj.findRow( "TY_GUBUN", "80" );	// [80] (26) 가산세액 명세	합 계
        				var nRow26 = this.dsList.findRow( "TY_GUBUN", "26" );

        				var nAm80 = nexacro.toNumber(obj.getColumn(nRow80, e.columnid) ,0);

        				this.dsList.setColumn(nRow26, e.columnid , nexacro.toNumber(nAm80));
        			}
        		}

        		// 세액
        		if(e.columnid == "AM_VAT"){
        			// [60] (18) 그 밖의 경감ㆍ공제 세액 명세	합 계
        			if(sTyGubun >= "54" && sTyGubun <= "59"){

        				var nRow54 = obj.findRow( "TY_GUBUN", "54" );
        				var nRow55 = obj.findRow( "TY_GUBUN", "55" );
        				var nRow56 = obj.findRow( "TY_GUBUN", "56" );
        				var nRow57 = obj.findRow( "TY_GUBUN", "57" );
        				var nRow58 = obj.findRow( "TY_GUBUN", "58" );
        				var nRow59 = obj.findRow( "TY_GUBUN", "59" );
        				var nRow60 = obj.findRow( "TY_GUBUN", "60" );

        				var nAm54 = nexacro.toNumber(obj.getColumn(nRow54, e.columnid) ,0);
        				var nAm55 = nexacro.toNumber(obj.getColumn(nRow55, e.columnid) ,0);
        				var nAm56 = nexacro.toNumber(obj.getColumn(nRow56, e.columnid) ,0);
        				var nAm57 = nexacro.toNumber(obj.getColumn(nRow57, e.columnid) ,0);
        				var nAm58 = nexacro.toNumber(obj.getColumn(nRow58, e.columnid) ,0);
        				var nAm59 = nexacro.toNumber(obj.getColumn(nRow59, e.columnid) ,0);
        				var nAm60 = nAm54 + nAm55 + nAm56 + nAm57 + nAm58 + nAm59;

        				obj.setColumn(nRow60, e.columnid , nexacro.toNumber(nAm60));

        			}

        			// [18] 경감ㆍ공제세액 그 밖의 경감ㆍ공제세액
        			if(sTyGubun == "60"){

        				var nRow60 = obj.findRow( "TY_GUBUN", "60" );	// [60] (18) 그 밖의 경감ㆍ공제 세액 명세
        				var nRow18 = this.dsList.findRow( "TY_GUBUN", "18" );

        				var nAm60 = nexacro.toNumber(obj.getColumn(nRow60, e.columnid) ,0);

        				this.dsList.setColumn(nRow18, e.columnid , nexacro.toNumber(nAm60));
        			}
        		}
        	}
        }

        this.fnGrid_AfterEdit = function(obj,e) {
        // 	if (e.columnid == "RT_EXCHANGE" || e.columnid == "AM_FOREIGN_JC") {
        // 		if (e.oldvalue != e.newvalue) {
        // 			this.dsList.setColumn(e.row, "AM_WON_JC", nexacro.toNumber(this.dsList.getColumn(e.row,"RT_EXCHANGE"), 0) * nexacro.toNumber(this.dsList.getColumn(e.row,"AM_FOREIGN_JC"), 0));
        // 		}
        // 	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {

            if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		//this.gfnGridClear(this.dxGrid);
        		//this.gfnGridClear(this.dxGrid2);

        		this.fnGridClear(this.dxGrid);
        		this.fnGridClear(this.dxGrid2);
        // 		if(this.tabData.tabindex != 0){
        // 			this.tabData.set_tabindex(0);
        // 		}

        		switch(e.columnid) {
        			case "YY_WORK":
        			case "NO_TAX1":
        				this.fnMagamSetting();
        				break;
        			case "NO_TAX2":
        				if (e.newvalue != "1" && e.newvalue != "2") return;
        				this.fnMagamSetting();
        				break;
        		}

        		this.btnCreate.set_enable(false);
        		this.btnESingo.set_enable(false);

        		this.btnAAdisKetFile.set_enable(false);
        		this.btnSingoBillFile.set_enable(false);
        		this.btnCreditCardFile.set_enable(false);

        		this.btnUpjong.set_enable(false);
        		this.btnVatControl.set_enable(false);
            }
        }

        /*
         *	그리드 데이터 클리어, 기타 초기화
         */
        this.fnGridClear = function(objGrid) {
        	objGrid.oldrow = null;
        	objGrid.oldcell = null;
        	var objDs = objGrid.getBindDataset();
        	//objDs.clearData();

        	objDs.set_enableevent(false);
        	for (var i=0; i<objDs.rowcount; i++) {
        		objDs.setColumn(i, "AM_GUMAK", "");
        		objDs.setColumn(i, "AM_VAT", "");
        		objDs.setColumn(i, "YN_EDIT", "N");
        		objDs.setColumn(i, "TY_SALEBUY", "");
        		objDs.setColumn(i, "CD_PROOF", "");
        	}
        	objDs.set_enableevent(true);
        	this.dsList3.clearData();
        };


        //자료생성
        this.fnCreate = function (obj,e) {
        	this.gfnConfirm("자료이관 하시겠습니까?", "fnCreate_callBack");
        };

        this.fnCreate_callBack = function(strId, val) {
        	if (val == false) return;

        	this.dsCreate.clearData();
        	this.dsCreate.addRow();
        	this.dsCreate.setColumn(0, "CD_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsCreate.setColumn(0, "YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"));
        	this.dsCreate.setColumn(0, "NO_TAX", this.fnGetNoTax());
        	this.dsCreate.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);

        	var strSvcId    = "create";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsCreate";
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

        // 부가세관리
        this.fnVatControl = function (obj,e) {
        	var obj = (this.tabData.tabindex == 0) ? this.dxGrid : this.dxGrid2;
        	var objDs = obj.getBindDataset();
        	var nRow = objDs.rowposition;

        	if(!this.gfnGridIsRow(obj)) return;

        	var sTY_SALEBUY = objDs.getColumn(nRow, "TY_SALEBUY");
        	var sCD_PROOF = objDs.getColumn(nRow, "CD_PROOF");
        	if (!this.gfnIsNull(sTY_SALEBUY) && !this.gfnIsNull(sCD_PROOF)){
        		this.fnVatControlOpen(sTY_SALEBUY, sCD_PROOF);
        	}
        };

        this.fnTaxClose = function(obj,e) { //마감처리

        	if (!this.fnSelectValidation()) return;

        	// 마감처리
        	this.gfnConfirm("마감 처리후에는 수정 불가능합니다. \n마감을 진행하시겠습니까?", "fnCloseCallBack", "Y");
        };

        this.fnCancle = function(obj,e) { //마감취소 처리

        	if (!this.fnSelectValidation()) return;

        	// 마감처리
        	this.gfnConfirm("마감취소를 진행하시겠습니까?", "fnCloseCallBack", "N");
        };

        this.fnCloseCallBack = function(strId, val) {
        	trace(" fnCloseCallBack=> strId : " +strId );
        	if(val == false) return;

        	this.dsClose.clearData();
        	this.dsClose.addRow();
        	this.dsClose.setColumn(0, "OUT_CD_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsClose.setColumn(0, "OUT_YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"));
        	this.dsClose.setColumn(0, "OUT_NO_TAX", this.fnGetNoTax());
        	this.dsClose.setColumn(0, "YN_CLOSE", strId);
        	this.dsClose.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "close";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "close=dsClose";
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

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
         // 승인/반려/상신/상신취소/재기안/수신접수/삭제 처리
        this.fnCreateFile = function(obj,e) {
        	var sFile = "AAdisKetFile";
        	trace("obj.name->" + obj.name);
        	switch (obj.name) {
        		case "btnExt_AAdisKetFile":	// 세금계산서
        			sFile = "aadisKetFile";
        			break;
        		case "btnExt_SingoBillFile":	// 계산서
        			sFile = "singoBillFile";
        			break;
        		case "btnExt_CreditCardFile":	//신용카드
        			sFile = "creditCardFile";
        			break;
        	}
        	this.gfnConfirm(" 신고 작업을 진행하시겠습니까?", "fnCreateFile_Callback", sFile);
        }

        this.fnCreateFile_Callback = function(strId, val) {
        	if(val) {
        		this.dsESingo.clearData();
        		this.dsESingo.addRow();
        		this.dsESingo.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        		this.dsESingo.setColumn(0, "YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"));
        		this.dsESingo.setColumn(0, "NO_TAX", this.fnGetNoTax());
        		this.dsESingo.setColumn(0, "CD_REFUND", this.dsSearch.getColumn(0, "CD_DEPT"));


        		trace("strId->" + strId);

        		var strSvcId    = "esingo";
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var inData      = strId + "=dsESingo";
        		var outData     = "dsText=" + strId + "0";
        		//var inData      = "esingo=dsESingo";
        		//var outData     = "dsText=esingo0";
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
        };

        //전산매체
        this.fnESingo = function (obj,e) {
        	this.gfnConfirm(" 신고 작업을 진행하시겠습니까?", "fnESingo_callBack");
        };

        this.fnESingo_callBack = function(strId, val) {
        	if (val == false) return;

        	if (nexacro.toNumber(this.dsList.getColumn(26, "AM_VAT"), 0) < 0) {
        		var param = {};
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_VATMANAGEDLG", "fnPopCallBack", param);
        		return;
        	}

        	this.fnESingoCreate();
        };

        this.fnESingoCreate = function() {
        	this.dsESingo.clearData();
        	this.dsESingo.addRow();
        	this.dsESingo.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsESingo.setColumn(0, "YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"));
        	this.dsESingo.setColumn(0, "NO_TAX", this.fnGetNoTax());
        	this.dsESingo.setColumn(0, "CD_REFUND", this.dsList3.getColumn(0, "DS_REFUND")); //환급구분
        	this.dsESingo.setColumn(0, "YN_ZERO", this.dsList3.getColumn(0, "YN_ZERO")); //영세율 상호주의

        	var strSvcId    = "esingo";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "esingo=dsESingo";
        	var outData     = "dsText=esingo0";
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

        this.FileDownTransfer00_onsuccess = function(obj,e) {
        	this.gfnAlert("파일생성이 완료되었습니다.");
        };

        //과세표준명세
        this.fnUpjong = function (obj,e) {
        	var param = {};
        	param.CD_SELFACNT = this.dsSearch.getColumn(0, "CD_DEPT");
        	param.YR_TAX = this.dsSearch.getColumn(0, "YY_WORK");
        	param.NO_TAX = this.fnGetNoTax();
        	param.YN_CLOSE = this.dsList3.getColumn(0, "YN_CLOSE");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_VATMANAGESUBDLG", "fnPopCallBack", param);
        };
        //영세율상호주의
        this.fnZero = function (obj,e) {
        	var param = {};
        	param.CD_SELFACNT = this.dsSearch.getColumn(0, "CD_DEPT");
        	param.YR_TAX = this.dsSearch.getColumn(0, "YY_WORK");
        	param.NO_TAX = this.fnGetNoTax();
        	param.YN_CLOSE = this.dsList3.getColumn(0, "YN_CLOSE");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_VATMANAGEZERODLG", "fnPopCallBack", param);
        };

        this.fnPopCallBack = function(svcID, val) {
        	if (val != false) {
        		this.CD_RETURN = val;

        		if (svcID.indexOf("DHV_VATMANAGEDLG") > -1) {
        			this.fnESingoCreate();
        		}
        	}
        }

        //국세청 홈텍스
        this.fnTaxHomePage = function (obj,e) {
        	window.open("http://www.hometax.go.kr");
        };

        this.fnGetNoTax = function() {
        	var noTax = "";
        	if (this.dsSearch.getColumn(0, "NO_TAX1") == "1") {
        		if (this.dsSearch.getColumn(0, "NO_TAX2") == "1")
        			noTax = "1";
        		else
        			noTax = "2";
        	}
        	else {
        		if (this.dsSearch.getColumn(0, "NO_TAX2") == "1")
        			noTax = "3";
        		else
        			noTax = "4";
        	}

        	return noTax;
        }

        this.fnMagamSetting = function() {
        	var dtFrom;
        	var dtTo;
        	var noTax = this.dsSearch.getColumn(0, "NO_TAX1");

        	if (this.dsSearch.getColumn(0, "YY_WORK").length < 4) return;
        	if (!(noTax == "1" || noTax == "2")) return;

        	if (this.dsSearch.getColumn(0, "NO_TAX2") == "1") {
        		if (noTax == "1") {
        			dtFrom = "01-01";
        			dtTo = "03-31";
        		}
        		else {
        			dtFrom = "07-01";
        			dtTo = "09-30";
        		}
        	}
        	else {
        		if (noTax == "1") {
        			dtFrom = "04-01";
        			dtTo = "06-30";
        		}
        		else {
        			dtFrom = "10-01";
        			dtTo = "12-31";
        		}
        	}

        	this.dsSearch.setColumn(0, "DT_FROM", dtFrom);
        	this.dsSearch.setColumn(0, "DT_TO", dtTo);
        }

        this.fnSetMergeCellTitle1 = function() {
        	trace("첫번째 그리드 머지시작")
        	//this.dxGridTest.mergeContentsCell( "body", 0, 5, 0, 200 );
        	//var nCell = this.dxGridTest.mergeContentsCell("body",0,1,1,1,1,true);
        	//Grid.mergeCell( nStartCol, nEndCol, nStartRow, nEndRow )

         	this.dxGrid.set_enableevent(false);
        	this.dsList.set_enableevent(false);

        	this.dxGrid.mergeCell( 0, 0, 0, 8 );	// 과세 표준 및 매출 세액
        	this.dxGrid.mergeCell( 1, 1, 0, 3 );	// 과세
        	this.dxGrid.mergeCell( 1, 1, 4, 5 );	// 영세율
        	this.dxGrid.mergeCell( 1, 2, 6, 6 );	// 예 정 신 고  누 락 분
         	this.dxGrid.mergeCell( 1, 2, 7, 7 );	// 대 손 세 액  가 감
         	this.dxGrid.mergeCell( 1, 2, 8, 8 );	// 합 계

        	this.dxGrid.mergeCell( 0, 0, 9, 17 );	// 매입 세액
        	this.dxGrid.mergeCell( 1, 1, 9, 11 );	// 세금계산서 수  취  분

         	this.dxGrid.mergeCell( 1, 2, 12, 12 );	// 예 정 신 고  누 락 분
         	this.dxGrid.mergeCell( 1, 2, 13, 13 );	// 매입자발행 세금계산서
         	this.dxGrid.mergeCell( 1, 2, 14, 14 );	// 그 밖의 공제매입세액
         	this.dxGrid.mergeCell( 1, 2, 15, 15 );	// 합계(10)-(10-1)+(11)+(12)+(13)+(14)
         	this.dxGrid.mergeCell( 1, 2, 16, 16 );	// 공제받지 못할 매입세액
         	this.dxGrid.mergeCell( 1, 2, 17, 17 );	// 차 감 계 (15)-(16)

         	this.dxGrid.mergeCell( 0, 4, 18, 18 );	// 납부(환급)세액 (매출세액㉮-매입세액㉯)

        	this.dxGrid.mergeCell( 0, 0, 19, 21 );	// 경감ㆍ공제세액
        	this.dxGrid.mergeCell( 1, 2, 19, 19 );	// 그 밖의 경감ㆍ공제세액
        	this.dxGrid.mergeCell( 1, 2, 20, 20 );	// 신용카드매출전표등 발행공제 등
        	this.dxGrid.mergeCell( 1, 2, 21, 21 );	// 합 계

        	this.dxGrid.mergeCell( 0, 2, 22, 22 );	// 소규모 개인사업자 부가가치세 감면세액
        	this.dxGrid.mergeCell( 0, 2, 23, 23 );	// 예 정 신 고 미 환 급 세 액
        	this.dxGrid.mergeCell( 0, 2, 24, 24 );	// 예 정 고 지 세 액
        	this.dxGrid.mergeCell( 0, 2, 25, 25 );	// 사업양수자가 대리납부한 세액
        	this.dxGrid.mergeCell( 0, 2, 26, 26 );	// 매입자 납부특례에 따라 납부한 세액
        	this.dxGrid.mergeCell( 0, 2, 27, 27 );	// 신용카드업자가 대리납부한 세액
        	this.dxGrid.mergeCell( 0, 2, 28, 28 );	// 가 산 세 액 계

        	this.dxGrid.mergeCell( 0, 4, 29, 29 );	// 차감ㆍ가감하여 납부할 세액(환급받을 세액)(㉰-㉱-㉲-㉳-㉴-㉵-㉶-㉷+㉸
        	this.dxGrid.mergeCell( 0, 5, 30, 30 );	// 총괄 납부 사업자가 납부할 세액(환급받을 세액)

        	var nEditType = this.dsList3.getColumn(0, "YN_CLOSE") =="Y" ? "none" : "text" ;

        	if (nEditType == "none") {
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_GUMAK"),"edittype", "none");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_VAT"),"edittype", "none");
        	} else {
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_GUMAK"),"edittype", "text");
        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_VAT"),"edittype", "text");
        	}

        	var sExpr = "( TY_GUBUN == '7' || TY_GUBUN == '9' || TY_GUBUN == '10-1' || TY_GUBUN == '12' || (TY_GUBUN >= '14' && TY_GUBUN <= '18' &&  TY_GUBUN != '171' )"
        			  + "|| TY_GUBUN == '20'|| (TY_GUBUN >= '23' && TY_GUBUN <= '26') || YN_EDIT == 'N')";
        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "AM_GUMAK"), "cssclass", "expr:"+sExpr+" ? 'BACK_ReadOnly':''");
        	this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_GUMAK"),"edittype", "expr:"+sExpr+"?'none':'" + nEditType + "'");
        	//this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_GUMAK"),"displaytype", "expr:"+sExpr+"?'none':'mask'");

        	// 납부(환급)세액 (매출세액㉮-매입세액㉯)
        	var sExprAmVat = "(TY_GUBUN == '7' || TY_GUBUN == '9' || TY_GUBUN == '12' || (TY_GUBUN >= '14' && TY_GUBUN <= '18' ) || TY_GUBUN == '171'"
        				   +"|| TY_GUBUN == '20' || TY_GUBUN == '26' || TY_GUBUN == '27' || TY_GUBUN == '271' || YN_EDIT == 'N')";
        	this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_VAT"),"edittype", "expr:"+sExprAmVat+"?'none':'" + nEditType + "'");
        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "AM_VAT"), "cssclass", "expr:"+sExprAmVat+" ? 'BACK_ReadOnly':''");
        	//this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","AM_VAT"),"displaytype", "expr:"+sExprAmVat+"?'text':'mask'");

        	this.dsList.set_enableevent(true);
        	this.dxGrid.set_enableevent(true);
        };

        this.fnSetMergeCellTitle2 = function() {
         	this.dxGrid2.set_enableevent(false);
        	this.dsList2.set_enableevent(false);

        	//Grid.mergeCell( nStartCol, nEndCol, nStartRow, nEndRow )

        	this.dxGrid2.mergeCell( 0, 0, 0, 7 );	// 예정신고 누 락 분 명세
        	this.dxGrid2.mergeCell( 1, 1, 0, 4 );	// (7)매출
        	this.dxGrid2.mergeCell( 2, 2, 0, 1 );	// 과세
        	this.dxGrid2.mergeCell( 2, 2, 2, 3 );	// 영세율
        	this.dxGrid2.mergeCell( 2, 3, 4, 4 );	// (7)매출 합계

        	this.dxGrid2.mergeCell( 1, 1, 5, 7 );	// (12)매입
        	this.dxGrid2.mergeCell( 2, 3, 5, 5 );	// 세 금 계 산 서
        	this.dxGrid2.mergeCell( 2, 3, 6, 6 );	// 그 밖의 공제매입세액
        	this.dxGrid2.mergeCell( 2, 3, 7, 7 );	// (12)매입 합계

         	this.dxGrid2.mergeCell( 0, 0, 8, 17 );	// (14) 그 밖의 공 제 매 입 세 액 명세
         	this.dxGrid2.mergeCell( 1, 2, 8, 9 );	// 신용카드매출전표등 수령명세서 제출분
        	this.dxGrid2.mergeCell( 1, 3, 10, 10 );	// 의 제 매 입 세 액
        	this.dxGrid2.mergeCell( 1, 3, 11, 11 );	// 재 활 용 폐 자 원 등 매 입 세 액
        	this.dxGrid2.mergeCell( 1, 3, 12, 12 );	// 과세사업전환 매입세액
        	this.dxGrid2.mergeCell( 1, 3, 13, 13 );	// 재 고 매 입 세 액
        	this.dxGrid2.mergeCell( 1, 3, 14, 14 );	// 변 제 대 손 세 액
        	this.dxGrid2.mergeCell( 1, 3, 15, 15 );	// 외국인 관광객에 대한 환급세액
        	this.dxGrid2.mergeCell( 1, 3, 16, 16 );
        	this.dxGrid2.mergeCell( 1, 3, 17, 17 );	// (14) 그 밖의 공제매입세액명세	합 계

        	this.dxGrid2.mergeCell( 0, 0, 18, 21 );	// (16) 그 밖의 공 제 매 입 세 액 명세
        	this.dxGrid2.mergeCell( 1, 3, 18, 18 );	// 공제받지 못할 매입세액
        	this.dxGrid2.mergeCell( 1, 3, 19, 19 );	// 공통매입세액 중 면세사업등 해당 세액
        	this.dxGrid2.mergeCell( 1, 3, 20, 20 );	// 대 손 처 분 받 은 세 액
        	this.dxGrid2.mergeCell( 1, 3, 21, 21 );	// 합 계

        	this.dxGrid2.mergeCell( 0, 0, 22, 28 );	// (18) 그 밖의 경감ㆍ공제 세액 명세
        	this.dxGrid2.mergeCell( 1, 3, 22, 22 );	// 전 자 신 고 세 액 공 제
        	this.dxGrid2.mergeCell( 1, 3, 23, 23 );	// 전자세금계산서 발급세액 공제
        	this.dxGrid2.mergeCell( 1, 3, 24, 24 );	// 택 시 운 송 사 업 자 경 감 세 액
        	this.dxGrid2.mergeCell( 1, 3, 25, 25 );	// 대리납부 세액공제
        	this.dxGrid2.mergeCell( 1, 3, 26, 26 );	// 현금영수증사업자 세액공제
        	this.dxGrid2.mergeCell( 1, 3, 27, 27 );	// 기 타
        	this.dxGrid2.mergeCell( 1, 3, 28, 28 );	// 합 계

        	this.dxGrid2.mergeCell( 0, 0, 29, 48 );	// (26) 가산세액 명세
        	this.dxGrid2.mergeCell( 1, 3, 29, 29 );	// 사 업 자 미 등 록 등
        	this.dxGrid2.mergeCell( 1, 2, 30, 32 );	// 세 금 계 산 서
        	this.dxGrid2.mergeCell( 1, 2, 33, 33 );	// 전자세금계산서
        	this.dxGrid2.mergeCell( 1, 2, 34, 34 );	// 발급명세 전송
        	this.dxGrid2.mergeCell( 1, 2, 35, 35 );	// 세금계산서
        	this.dxGrid2.mergeCell( 1, 2, 36, 36 );	// 합계표

        	this.dxGrid2.mergeCell( 1, 2, 37, 40 ); // 신 고 불 성 실
        	this.dxGrid2.mergeCell( 1, 3, 41, 41 );	// 납 부 지 연
        	this.dxGrid2.mergeCell( 1, 3, 42, 42 );	// 영세율 과세표준신고 불성실
        	this.dxGrid2.mergeCell( 1, 3, 43, 43 );	// 현금매출명세서 불성실
        	this.dxGrid2.mergeCell( 1, 3, 44, 44 );	// 부동산임대공급가액명세서 불성실

        	this.dxGrid2.mergeCell( 1, 2, 45, 46 );	// 매입자 납부특례
        	this.dxGrid2.mergeCell( 1, 3, 47, 47 );	// 신용카드 매출전표 등 수령명세서 미제출.과다기재
        	this.dxGrid2.mergeCell( 1, 3, 48, 48 );	// 합 계

        	var nEditType = this.dsList3.getColumn(0, "YN_CLOSE") =="Y" ? "none" : "text" ;

        	if (nEditType == "none") {
        		this.dxGrid2.setCellProperty("body",this.dxGrid2.getBindCellIndex("body","AM_GUMAK"),"edittype", "none");
        		this.dxGrid2.setCellProperty("body",this.dxGrid2.getBindCellIndex("body","AM_VAT"),"edittype", "none");
        	} else {
        		this.dxGrid2.setCellProperty("body",this.dxGrid2.getBindCellIndex("body","AM_GUMAK"),"edittype", "text");
        		this.dxGrid2.setCellProperty("body",this.dxGrid2.getBindCellIndex("body","AM_VAT"),"edittype", "text");
        	}

        	//"expr:dataset.getColumn(currow,'TY_GUBUN') == 'I'
        	var sExprAmGumak = "( TY_GUBUN == '37' || TY_GUBUN == '40' || (TY_GUBUN >= '45' && TY_GUBUN <= '48') || TY_GUBUN == '49' || "
        					 + " TY_GUBUN == '53' || (TY_GUBUN >= '54' && TY_GUBUN <= '60') || TY_GUBUN == '80' || TY_GUBUN == '999' || YN_EDIT == 'N')";
        	this.dxGrid2.setCellProperty("body", this.dxGrid2.getBindCellIndex("body", "AM_GUMAK"), "cssclass", "expr:"+sExprAmGumak+" ? 'BACK_ReadOnly':''");
        	this.dxGrid2.setCellProperty("body",this.dxGrid2.getBindCellIndex("body","AM_GUMAK"),"edittype", "expr:"+sExprAmGumak+"?'none':'" + nEditType + "'");
        	//this.dxGrid2.setCellProperty("body",this.dxGrid2.getBindCellIndex("body","AM_GUMAK"),"displaytype", "expr:"+sExprAmGumak+"?'none':'mask'");

        	//var sExprDsRate = "((TY_GUBUN >= '37' && TY_GUBUN <= '40') || (TY_GUBUN >= '45' && TY_GUBUN <= '60') || TY_GUBUN == '79' || TY_GUBUN == '999')";
        	//this.dxGrid2.setCellProperty("body", this.dxGrid2.getBindCellIndex("body", "DS_RATE"), "background", "expr:"+sExprDsRate+" ? '#f7f7f7':''");
        	//this.dxGrid2.setCellProperty("body",this.dxGrid2.getBindCellIndex("body","DS_RATE"),"edittype", "expr:"+sExprDsRate+"?'none':'text'");

        	var sExprAmVat = "(TY_GUBUN == '35' || TY_GUBUN == '36' || TY_GUBUN == '37' || TY_GUBUN == '40' || TY_GUBUN == '49' || "
        					+ "TY_GUBUN == '53' || TY_GUBUN == '60' || TY_GUBUN == '80' || TY_GUBUN == '999' || YN_EDIT == 'N' )";
        	this.dxGrid2.setCellProperty("body", this.dxGrid2.getBindCellIndex("body", "AM_VAT"), "cssclass", "expr:"+sExprAmVat+" ? 'BACK_ReadOnly':''");
        	this.dxGrid2.setCellProperty("body",this.dxGrid2.getBindCellIndex("body","AM_VAT"),"edittype", "expr:"+sExprAmVat+"?'none':'" + nEditType + "'");
        	//this.dxGrid2.setCellProperty("body",this.dxGrid2.getBindCellIndex("body","AM_VAT"),"displaytype", "expr:"+sExprAmVat+"?'none':'mask'");

        	this.dsList2.set_enableevent(true);
        	this.dxGrid2.set_enableevent(true);
        };

        this.divData_tabData_onchanged = function(obj,e)
        {
        	if(e.postindex == 1 && this.sYnGrid2Merge == "N"){
        		trace("두번째 그리드 머지시작")
        		this.sYnGrid2Merge = "Y";
        		this.fnSetMergeCellTitle2();
        		this.fnReadOnly(this.dsList3.getColumn(0, "YN_CLOSE"));
        	}
        };

        this.divData_btn00_onclick = function(obj,e)
        {

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("OUT_CD_SELFACNT", "string");
        	this.dsReport.addColumn("OUT_YR_TAX", "string");
        	this.dsReport.addColumn("OUT_NO_TAX", "string");

        	this.dsReport.clearData();
        	this.dsReport.addRow();
        	this.dsReport.setColumn(0, "OUT_CD_SELFACNT", this.gfnTrim(this.dsSearch.getColumn(0, "CD_DEPT")));
        	this.dsReport.setColumn(0, "OUT_YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"));
        	this.dsReport.setColumn(0, "OUT_NO_TAX", this.fnGetNoTax());

        	var inProc		= "_dsProc";
        	var inParam 	= "";						// 필요없는 경우 생략
        	//var inParam 	= "params=dsReportParam";
        	var inData      = "report=dsReport";
        	var reportpath  = "/dh/dhv/DHV_ORDERTAX_DEFRAYMENT_RPT2.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        };

        this.divData_tabData_tab1_objGrid_oncelldblclick = function(obj,e)
        {
        	var colName = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	var objDs = obj.getBindDataset();
        	var nRow = e.row; //objDs.rowposition;

        	switch(colName) {
        		case "DS_GUBUN1":
        		case "DS_GUBUN2":
        		case "DS_GUBUN3":
        		case "DS_GUBUN4":
        		case "CD_GUBUN":
        			var sTY_SALEBUY = objDs.getColumn(nRow, "TY_SALEBUY");
        			var sCD_PROOF = objDs.getColumn(nRow, "CD_PROOF");
        			if (this.btnVatControl.enable && !this.gfnIsNull(sTY_SALEBUY) && !this.gfnIsNull(sCD_PROOF)){
        				this.fnVatControlOpen(sTY_SALEBUY, sCD_PROOF);
        			}
        		break;
        	}
        };

        this.divData_tabData_tab2_objGrid2_oncelldblclick = function(obj,e)
        {
        	var colName = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	var objDs = obj.getBindDataset();
        	var nRow = e.row; //objDs.rowposition;

        	switch(colName) {
        		case "DS_GUBUN1":
        		case "DS_GUBUN2":
        		case "DS_GUBUN3":
        		case "DS_GUBUN4":
        		case "CD_GUBUN":
        			var sTY_SALEBUY = objDs.getColumn(nRow, "TY_SALEBUY");
        			var sCD_PROOF = objDs.getColumn(nRow, "CD_PROOF");
        			if (this.btnVatControl.enable && !this.gfnIsNull(sTY_SALEBUY) && !this.gfnIsNull(sCD_PROOF)){
        				this.fnVatControlOpen(sTY_SALEBUY, sCD_PROOF);
        			}
        		break;
        	}
        };


        this.fnVatControlOpen = function (sTY_SALEBUY, sCD_PROOF){

        	var param = {};
        	param.TY_SALEBUY = (sTY_SALEBUY == "I") ? "V10" : "V11";
        	param.CD_PROOF = sCD_PROOF
        	param.CD_CORP = this.gfnTrim(this.dsSearch.getColumn(0, "CD_CORP"));
        	param.DS_CORP = this.gfnTrim(this.dsSearch.getColumn(0, "DS_CORP"));
        	param.CD_DEPT = this.gfnTrim(this.dsSearch.getColumn(0, "CD_DEPT"));
        	var YY_WORK = this.dsSearch.getColumn(0, "YY_WORK");
        	var DT_FROM = nexacro.replaceAll(this.gfnTrim(this.dsSearch.getColumn(0, "DT_FROM")), "-","");
        	var DT_TO = nexacro.replaceAll(this.gfnTrim(this.dsSearch.getColumn(0, "DT_TO")), "-","");

        	param.DT_FROM = YY_WORK + DT_FROM;
        	param.DT_TO = YY_WORK + DT_TO;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_VATCONTROL", "fnPopCallBack", param);
        	return;
        }

        this.divData_onitemchanged = function(obj,e)
        {
        	trace(" divData_onitemchanged=>" );
        	this.sEditYn = "Y";
        	this.gfnSetFormStatus(this, "U");
        };

        this.fnReadOnly = function(vflg) {

        	var uflag = true;

        	if(vflg == "Y") {
        		uflag = false;
        	}
        	this.FormBtns.Save.set_enable(uflag);
        	this.btnCreate.set_enable(uflag);
        	this.btnClose.set_enable(uflag);
        	this.btnCancle.set_enable(uflag ? false : true);

        	this.divData.form.ccbDS_REFUND.set_enable(uflag);
        	this.divData.form.ccbYN_ZERO.set_enable(uflag);

        	this.dsList.set_enableevent(uflag);
        	this.dsList2.set_enableevent(uflag);
        	this.dsList3.set_enableevent(uflag);

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.divData.form.tabData.tab1.form.objGrid.addEventHandler("oncelldblclick",this.divData_tabData_tab1_objGrid_oncelldblclick,this);
            this.divData.form.tabData.tab2.form.objGrid2.addEventHandler("oncelldblclick",this.divData_tabData_tab2_objGrid2_oncelldblclick,this);
            this.divData.form.btn00.addEventHandler("onclick",this.divData_btn00_onclick,this);
            this.divData.form.ccbDS_REFUND.addEventHandler("onitemchanged",this.divData_onitemchanged,this);
            this.divData.form.ccbYN_ZERO.addEventHandler("onitemchanged",this.divData_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.FileDownTransfer00.addEventHandler("onsuccess",this.FileDownTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("DHV_VATMANAGE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
