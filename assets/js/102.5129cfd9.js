(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{527:function(s,n,a){"use strict";a.r(n);var e=a(25),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"kaggle-classify-leaves-竞赛方案学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kaggle-classify-leaves-竞赛方案学习"}},[s._v("#")]),s._v(" kaggle-Classify Leaves 竞赛方案学习")]),s._v(" "),a("h3",{attrs:{id:"_1、5th-解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、5th-解决方案"}},[s._v("#")]),s._v(" 1、"),a("a",{attrs:{href:"https://www.kaggle.com/c/classify-leaves/discussion/244714#1340465",target:"_blank",rel:"noopener noreferrer"}},[s._v("5th 解决方案"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("模型：\n\tseresnext50和resnet50\n数据增强：\n\tresize 320, HorizontalFlip, VerticalFlip, Rotate, RandomBrightnesContrasr, ShiftScaleRotate, Normalize\n其他：\n\t优化器：AdamW \n\t学习率调整器：CosineAnnealingLR\n\t损失函数：CrossEntropy\n\t5折交叉验证， 最终结果为五折准确率最高平均， 两个网络各自平均后再做平均。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"_2、7th-解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、7th-解决方案"}},[s._v("#")]),s._v(" 2、"),a("a",{attrs:{href:"https://www.kaggle.com/charlesyyun/7th-resnest-resnext-densenet-0-98840",target:"_blank",rel:"noopener noreferrer"}},[s._v("7th 解决方案"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("模型：\n\tResNeSt50 + ResNeXt50_32x4d + DenseNet161\n数据增强：\n\ttrain_transform = transforms.Compose([\n    # 随机裁剪图像，所得图像为原始面积的0.08到1之间，高宽比在3/4和4/3之间。\n    # 然后，缩放图像以创建224 x 224的新图像\n    transforms.RandomResizedCrop(224, scale=(0.08, 1.0), ratio=(3.0 / 4.0, 4.0 / 3.0)),\n    transforms.RandomHorizontalFlip(), \n    # 随机更改亮度，对比度和饱和度\n    transforms.ColorJitter(brightness=0.4, contrast=0.4, saturation=0.4),\n    transforms.ToTensor(),   \n    # 标准化图像的每个通道\n    transforms.Normalize([0.485, 0.456, 0.406],[0.229, 0.224, 0.225])])\n\t\n\t训练时的 CutMix 以及 预测时的 TTA\n\tCutMix: https://github.com/ildoonet/cutmix\n\tTTA: https://github.com/qubvel/ttach\n其他：\n\t总共训了 30 个 epoch\n\t优化器：使用 AdamW，torch.optim.AdamW(model.parameters(),lr=1e-4,weight_decay= 1e-3)\n\t学习率调整：CosineAnnealingLR: CosineAnnealingLR(optimizer,T_max=10)\n\t交叉验证：使用 5 折交叉验证\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h3",{attrs:{id:"_3、8th-解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、8th-解决方案"}},[s._v("#")]),s._v(" 3、"),a("a",{attrs:{href:"https://www.kaggle.com/wjfearth/8th-classify-leaves-with-tpu-5hrs-0-989",target:"_blank",rel:"noopener noreferrer"}},[s._v("8th 解决方案"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n# Using an LR ramp up because fine-tuning a pre-trained model.\n# Starting with a high LR would break the pre-trained weights.\n# 提到一开始使用大的 LR 会破坏原有的预训练权重\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_4、9th-解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、9th-解决方案"}},[s._v("#")]),s._v(" 4、"),a("a",{attrs:{href:"https://www.kaggle.com/yichaohan/classify-leaves-11-models",target:"_blank",rel:"noopener noreferrer"}},[s._v("9th 解决方案"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("模型：\n    0, resnet50d, input_size: 224 (selected)\n    1, efficientnet_b3, input_size: 224 (selected)\n    2, resnext50_32x4d, input_size: 224\n    3, inception_resnet_v2, input_size: 299 (selected)\n    4, vit_base_patch16_224, input_size: 224 (selected)\n    5, tf_efficientnet_b3_ns, input_size: 224\n    6, tf_efficientnet_b4_ns, input_size: 380 (selected)\n    7, resnest200e, input_size 320 (selected)\n    8, mixnet_s, input_size 224\n    9, mixnet_xl, input_size 224 (selected)\n    10, resnest50d, input_size 224\n数据增强：\n\ttransforms.Compose([\n        transforms.ToTensor(),\n        transforms.RandomHorizontalFlip(p=0.5),\n        transforms.RandomVerticalFlip(p=0.5),\n        transforms.ColorJitter(brightness=0.2, contrast=0.2, saturation=0.2, hue=0),\n        transforms.RandomResizedCrop([CFG.size, CFG.size]),\n        transforms.Normalize(\n            mean=[0.5, 0.5, 0.5],\n            std=[0.5, 0.5, 0.5],\n        )\n其他：\n\t总共训了 50 个epoch\n\tbatch_size = 32\n\tcriterion = CrossEntropyLoss()\n\toptimizer = MADGRAD \n    learning_rate = 1e-4\n    weight_decay = 1e-9\n    scheduler = 'ReduceLROnPlateau' \n    factor = 0.2 # ReduceLROnPlateau\n    patience = 4 # ReduceLROnPlateau\n    eps = 1e-6   # ReduceLROnPlateau\n    交叉验证：5 折交叉验证\n    模型选择：Stacked mean combinations & Weighted average（值得学习）\n    \n    probs_3D = np.zeros([train.shape[0],num_class,num_models])\n    Weighted average 用来检验模型的重要性以及验证stacked mean method足够优秀\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])]),a("h3",{attrs:{id:"_5、11th-解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、11th-解决方案"}},[s._v("#")]),s._v(" 5、"),a("a",{attrs:{href:"https://www.kaggle.com/seefun/seefun-baseline-using-torchtils-lb0-987",target:"_blank",rel:"noopener noreferrer"}},[s._v("11th 解决方案"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("自建的比赛tricks库：https://github.com/seefun/TorchUtils\nBaseline:https://github.com/seefun/TorchUtils/blob/master/examples/kaggle_leaves_classification.ipynb\n\n\n\n模型：\n\n数据增强：\n\ttrain_transform = albumentations.Compose([\n    albumentations.RandomRotate90(p=0.5),\n    albumentations.Transpose(p=0.5),\n    albumentations.Flip(p=0.5),\n    albumentations.ShiftScaleRotate(shift_limit=0.0625, scale_limit=0.0625, rotate_limit=45, border_mode=1, p=0.5),\n    tu.randAugment(),\n    albumentations.Normalize(),\n    # 这里要使用 ToTensorV2()\n    AT.ToTensorV2(),\n    ])\n其他：\n\t使用混合精度训练，节省时间，甚至能因为大batch而提升性能\n\tscaler = torch.cuda.amp.GradScaler() # for AMP training\n\tscaler.scale(loss).backward()\n\tscaler.step(optimizer)\n    scaler.update()\n\t使用imagenet-21k上预训练的efficientnetv2模型：https://arxiv.org/abs/2104.00298\n\tmutli-dropout\n\tLR = 3e-4\n\tEPOCH = 36\n\tDECAY_SCALE = 20.0\n\tpooling时concat maxpooling与avgpooling\n\tmixup / Label Smoothing作为正则\n\t余弦学习率下降\n\t使用Ranger(RAdam+Lookahead+GC)/ RangerLars(Ranger+Lars)优化\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("p",[s._v("总结：")]),s._v(" "),a("ol",[a("li",[s._v("比赛数据集存在大量leak，训练测试集大量图片重复或接近，过拟合反而能获得更好结果；")]),s._v(" "),a("li",[s._v("数据集存在很多噪声样本，过拟合这些错误标注反而能获得更高的LB；即LB本身并不可靠，更高的LB不代表真正更高的泛化性能；")])]),s._v(" "),a("h3",{attrs:{id:"_6、12th-解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、12th-解决方案"}},[s._v("#")]),s._v(" 6、"),a("a",{attrs:{href:"https://www.kaggle.com/wanglinchen/12th-private-score-0-98704-reference-to-seefun",target:"_blank",rel:"noopener noreferrer"}},[s._v("12th 解决方案"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("在 11th 的解决方案上进行微调\n\n1、加入mixup，设为0.1（太大会使模型性能下降），使用\n2、epoch 加大到 72\n3、在 randAugment 中加入cutout\n4、加入LabelSmoothing: tu.LabelSmoothingCrossEntropy()\n- https://github.com/seefun/TorchUtils/blob/master/torch_utils/criterion/CrossEntropy.py\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_7、13th-解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、13th-解决方案"}},[s._v("#")]),s._v(" 7、"),a("a",{attrs:{href:"https://www.kaggle.com/kxlyhit/13th-code-and-summary",target:"_blank",rel:"noopener noreferrer"}},[s._v("13th 解决方案"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("模型：\n\t一个seresnext50，两个resnext50\n数据增强：\n\tResize 224            \n    transforms.RandomHorizontalFlip(p=0.5),   #随机水平翻转\n    transforms.RandomVerticalFlip(p=0.5),     #除了水平竖直反转之外其他的处理方法貌似都会降低acc       transforms.ToTensor(),\n    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])\n其他：\n\tlr_scheduler:ReduceLROnPlateau(optimizer, mode='min', factor=0.5, patience=3, verbose=True, min_lr=0.0000001)\n\t在训练过程中使用 cutmix\n\t验证和测试的时候使用TTA: tta.ClassificationTTAWrapper(model_1, tta.aliases.flip_transform(),  merge_mode='mean')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"_8、19th-解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、19th-解决方案"}},[s._v("#")]),s._v(" 8、"),a("a",{attrs:{href:"https://www.kaggle.com/liyihang970828/19th-credit-to-seefun",target:"_blank",rel:"noopener noreferrer"}},[s._v("19th 解决方案"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("模型：\n\tresnest50d\n其他：\n\t三折交叉验证\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_9、参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、参考资料"}},[s._v("#")]),s._v(" 9、参考资料")]),s._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.kaggle.com/amrmahmoud123/1-guide-to-ensembling-methods",target:"_blank",rel:"noopener noreferrer"}},[s._v("Guide-to-ensembling-methods"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.kaggle.com/isbhargav/guide-to-pytorch-learning-rate-scheduling#6.-CosineAnnealingLR",target:"_blank",rel:"noopener noreferrer"}},[s._v("Guide to Pytorch Learning Rate Scheduling"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.kaggle.com/virajbagal/mixup-cutmix-fmix-visualisations",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mixup, Cutmix, FMix Visualisations"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);n.default=t.exports}}]);