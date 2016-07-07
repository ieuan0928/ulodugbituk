var _parent = wormHelper.refreshModule("./worm_scheme/ui_elements/pageBase.js").prototype,
	_proto = home.prototype = Object.create(_parent);
	
var textBox = wormHelper.refreshModule("./worm_scheme/ui_elements/textBox.js");
var panel = wormHelper.refreshModule("./worm_scheme/ui_elements/panel.js"); 
var label = wormHelper.refreshModule("./worm_scheme/ui_elements/label.js");
var checkBox = wormHelper.refreshModule("./worm_scheme/ui_elements/checkBox.js");
var image = wormHelper.refreshModule("./worm_scheme/ui_elements/image.js");
var radioButton = wormHelper.refreshModule("./worm_scheme/ui_elements/radioButton.js");
var comboBox = wormHelper.refreshModule("./worm_scheme/ui_elements/comboBox.js");
var option = wormHelper.refreshModule("./worm_scheme/ui_elements/option.js");

_proto.constructor = home;

function home() {
	_parent.constructor.apply(this);
	
	this.textBox1 = new textBox();
	this.textArea1 = new textBox();
	this.panel1 = new panel();
	this.panel2 = new panel();
	this.panel3 = new panel();
	this.label1 = new label();
	this.label2 = new label();
	this.labelWithContent = new label();
	this.checkBox1 = new checkBox();
	this.checkBox2 = new checkBox();
	this.checkBox3 = new checkBox();
	this.checkBox4 = new checkBox();
	this.image1 = new image();
	this.image2 = new image();
	this.labelWithImage = new label();
	this.labelWithImage2 = new label();
	this.labelWithImage3 = new label();
	this.labelWithImage4 = new label();
	this.labelWithImage5 = new label();
	this.radioButton = new radioButton();
	this.radioButton2 = new radioButton();
	this.comboBox1 = new comboBox();
	this.option1 = new option();
	this.option2 = new option();
	
}




_proto.createElements = function() {
	
	//textbox
	/*this.textBox1.set("isMultiline", false);
	this.textBox1.set("identifier", "text_box_1_id");
	this.textBox1.set("className", "text_box_1_class");
	this.textBox1.set("name", "text_box_1_name");
	this.textBox1.set("placeHolder", "text_box_1_placeholder");
	this.textBox1.set("value", "text_box_value_1");
	this.textBox1.set("parent", this);*/
	//textbox end
	
	//textarea
	/*this.textArea1.set("isMultiline", true);
	this.textArea1.set("identifier", "text_area_1_id");
	this.textArea1.set("className", "text_area_1_class");
	this.textArea1.set("name", "text_area_1_name");
	this.textArea1.set("placeHolder", "text_area_1_placeholder");
	this.textArea1.set("value", "text_area_value_1");
	this.textArea1.set("parent", this);*/
	//textarea end
	
	//panel
	/*this.panel1.set("className", "panel_1_class");
	this.panel1.set("identifier", "panel_1_id");*/
	//this.panel1.set("parent", this);
	//panel end
	
	//panel3
	/*this.panel3.set("className", "panel_3_class");
	this.panel3.set("identifier", "panel_3_id");
	this.panel3.set("parent", this.panel1);*/
	//panel3 end
	
	//label with no object
	/*this.label1.set("identifier", "label_1_id");
	this.label1.set("className", "label_1_class");
	this.label1.set("value", "test value in label 1");
	this.label1.set("header", "h2");
	this.label1.set("content", "i am the content of the label above me.");
	this.label1.set("parent", this);*/
	//end
	
	//label2 
	/*this.label2.set("identifier", "label_2_id");
	this.label2.set("className", "label_2_class");
	this.label2.set("value", "Label 2");
	this.label2.set("header", "h1");
	this.label2.set("content", "i am the content of label 2");
	this.label2.set("parent", this.panel1);*/
	//end label2
	
	//panel2
	/*this.panel2.set("className", "panel_2_class");
	this.panel2.set("identifier", "panel_2_id");
	this.panel2.set("parent", this);*/
	//panel2 end
	
	//label with object
	/*this.labelWithContent.set("identifier", "labelWithContent_id");
	this.labelWithContent.set("className", "labelWithContent_class");
	this.labelWithContent.set("value", "label value with object");
	this.labelWithContent.set("header", "h3");
	this.labelWithContent.set("content", this.panel1);
	this.labelWithContent.set("parent", this.panel2);
	//this.labelWithContent.set("parent", this);*/
	//end
	
	//checkbox1
	/*this.checkBox1.set("identifier", "checkbox_1_id");
	this.checkBox1.set("className", "checkbox_1_class");
	this.checkBox1.set("name", "checkbox_1_name");
	this.checkBox1.set("value", "Koenigsegg Agera");
	this.checkBox1.set("content", this.image1);
	this.checkBox1.set("parent", this);*/
	//end
	
	//checkbox2
	/*this.checkBox2.set("identifier", "checkbox_2_id");
	this.checkBox2.set("className", "checkbox_2_class");
	this.checkBox2.set("name", "checkbox_1_name");
	this.checkBox2.set("value", "Mclaren P1");
	this.checkBox2.set("content", this.labelWithImage2);
	this.checkBox2.set("parent", this);*/
	//end
	
	//checkbox3
	/*this.checkBox3.set("identifier", "checkbox_3_id");
	this.checkBox3.set("className", "checkbox_3_class");
	this.checkBox3.set("name", "checkbox_1_name");
	this.checkBox3.set("value", "Nissan GTR");
	this.checkBox3.set("content", this.labelWithImage3);
	this.checkBox3.set("parent", this);*/
	//end
	
	//checkbox4
	/*this.checkBox4.set("identifier", "checkbox_4_id");
	this.checkBox4.set("className", "checkbox_4_class");
	this.checkBox4.set("name", "checkbox_1_name");
	this.checkBox4.set("value", "Lamborghini Aventador SV");
	this.checkBox4.set("content", this.labelWithImage4);
	this.checkBox4.set("parent", this);*/
	//end
	
	//labelwithiamge1
	/*this.labelWithImage.set("identifier", "labelWithImage_1_id");
	this.labelWithImage.set("className", "labelWithImage_1_class");
	this.labelWithImage.set("value", "Koenigsegg Agera");
	this.labelWithImage.set("header", "h6");
	this.labelWithImage.set("content", this.image1);*/
	//end
	
	//labelwithiamge2
	/*this.labelWithImage2.set("identifier", "labelWithImage_2_id");
	this.labelWithImage2.set("className", "labelWithImage_2_class");
	this.labelWithImage2.set("value", "Mclaren P1");
	this.labelWithImage2.set("header", "h6");
	this.labelWithImage2.set("content", this.image1);*/
	//end
	
	//labelwithiamge3
	/*this.labelWithImage3.set("identifier", "labelWithImage_3_id");
	this.labelWithImage3.set("className", "labelWithImage_3_class");
	this.labelWithImage3.set("value", "Nissan GTR");
	this.labelWithImage3.set("header", "h6");
	this.labelWithImage3.set("content", this.image1);*/
	//end
	
	//labelwithiamge4
	/*this.labelWithImage4.set("identifier", "labelWithImage_4_id");
	this.labelWithImage4.set("className", "labelWithImage_4_class");
	this.labelWithImage4.set("value", "Lamborghini Aventador SV");
	this.labelWithImage4.set("header", "h6");
	this.labelWithImage4.set("content", this.image1);*/
	//end
	
	//radiobutton1
	/*this.radioButton.set("identifier", "radio_1_id");
	this.radioButton.set("className", "radio_1_class");
	this.radioButton.set("name", "radio_name");
	this.radioButton.set("value", "test radio one");
	this.radioButton.set("content", "test radio one");
	this.radioButton.set("parent", this);*/
	//end

	//radiobutton2 with oject content
	/*this.radioButton2.set("identifier", "radio_2_id");
	this.radioButton2.set("className", "radio_2_class");
	this.radioButton2.set("name", "radio_name");
	this.radioButton2.set("value", "test radio two");
	this.radioButton2.set("content", this.labelWithImage);
	this.radioButton2.set("parent", this);*/
	//end
	
	//image1
	/*this.image1.set("identifier", "image_1_id");
	this.image1.set("className", "image_1_class");
	this.image1.set("imagePath", "sample_image.png");
	this.image1.set("parent", this);*/
	//end
	
	//comboBox1
	this.comboBox1.set("identifier", "comboBox1_id");
	this.comboBox1.set("className", "comboBox1_class");
	this.comboBox1.set("addOption", this.option1);
	this.comboBox1.set("addOption", this.option2);
	this.comboBox1.set("parent", this);
	//end
	
	/*option start*/
	this.option1.set("identifier", "option_id_1");
	this.option1.set("className", "option_class_1");
	this.option1.set("content", this.labelWithImage5);
	/*end*/
	
	//option2
	this.option2.set("identifier", "option_id_2");
	this.option2.set("className", "option_class_2");
	this.option2.set("content", "option2 without content");
	//end
	
	//labelWithImage5
	this.labelWithImage5.set("identifier", "labelWithImage5");
	this.labelWithImage5.set("className", "labelWithImage5");
	this.labelWithImage5.set("header", "p");
	this.labelWithImage5.set("content", this.image2);
	this.labelWithImage5.set("value", "option 1");
	//end
	
	//image2
	this.image2.set("identifier", "image_2_id");
	this.image2.set("className", "image_2_class_0");
	this.image2.set("className", "image_2_class_1");
	this.image2.set("className", "image_2_class_2");
	this.image2.set("imagePath", "smiley.jpeg");
	//end
	
	//test look and feel
	this.image2.set("margintop", "30px");
	this.image2.set("marginleft", "31px");
	this.image2.set("parent", this);
	
	
	this.labelWithImage5.set("margintop", "60px");
	this.labelWithImage5.set("marginleft", "61px");
	
	//get data
	//console.log(this.image2.lookAndFeel);
	//console.log(this.labelWithImage5.lookAndFeel);
}

module.exports = home;