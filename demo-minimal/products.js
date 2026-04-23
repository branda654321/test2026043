(function () {
  var productData = {
    senge: {
      code: 'MS-001',
      enName: 'SENGE BOARD',
      name: '森格板',
      summary: '森格板以耐燃、隔熱、節能與裝飾整合為核心，適合住宅、商空、公設與醫療等場域。',
      meta: [
        { title: '產品定位', value: '耐燃隔熱節能裝飾板' },
        { title: '適用場域', value: '住宅 / 商辦 / 公設 / 醫療' },
        { title: '施工特性', value: '乾淨快速，易於整合工序' }
      ],
      features: [
        '耐燃性能佳，符合多數建築空間需求。',
        '防霉抗菌、耐磨，後續維護負擔較低。',
        '可作為牆面與系統整合材料，提升整體質感。'
      ],
      specs: [
        ['核心特性', '耐燃、隔熱、節能、裝飾整合'],
        ['常見應用', '住宅主牆、公共空間、櫃體立面'],
        ['提案重點', '兼顧安全性與整體視覺一致性']
      ],
      swatches: [
        { name: 'Warm Ash', tone: '#d8cdc0', light: true },
        { name: 'Stone Beige', tone: '#c5b29d', light: true },
        { name: 'Mineral Taupe', tone: '#9f8d7b', light: false },
        { name: 'Forest Clay', tone: '#667267', light: false }
      ],
      images: [
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    polymer: {
      code: 'MS-002',
      enName: 'POLYMER WALL & FLOOR',
      name: '高分子晶塑牆地板',
      summary: '可直接覆貼於原有磁磚或牆地面，降低拆除與清運成本，適合濕區與翻修場域。',
      meta: [
        { title: '產品定位', value: '免打除翻新牆地系統' },
        { title: '適用場域', value: '浴廁 / 商空 / 高使用區域' },
        { title: '施工特性', value: '停工短，牆地視覺一致' }
      ],
      features: [
        '免打除覆貼，降低粉塵與施工干擾。',
        '具防水、防滑與耐磨特性，適合高使用頻率。',
        '牆地一體化後，空間視覺更完整。'
      ],
      specs: [
        ['核心特性', '防水、防滑、耐磨、降噪'],
        ['常見應用', '浴廁翻修、商空地坪、公共區域'],
        ['提案重點', '提升效率並兼顧清潔維護']
      ],
      swatches: [
        { name: 'Mist White', tone: '#e8e3d9', light: true },
        { name: 'Cream Sand', tone: '#d6c8b6', light: true },
        { name: 'Soft Cement', tone: '#a2a09b', light: false },
        { name: 'Muted Slate', tone: '#6f7473', light: false }
      ],
      images: [
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    conductive: {
      code: 'MS-003',
      enName: 'CONDUCTIVE / PVC FLOOR',
      name: '同質透心導電 / PVC 地板',
      summary: '提供穩定耐磨與靜電控制能力，適合醫療、電子與高規格製程空間。',
      meta: [
        { title: '產品定位', value: '導電與高耐磨地坪系統' },
        { title: '適用場域', value: '醫療 / 電子 / 精密製程' },
        { title: '施工特性', value: '重視規格、耐久與維護效率' }
      ],
      features: [
        '對應 ESD 需求，降低靜電風險。',
        '同質透心結構耐磨，適合高人流使用。',
        '易清潔、低氣味，適合高規格維護環境。'
      ],
      specs: [
        ['核心特性', '導電、耐磨、低維護'],
        ['常見應用', '醫療空間、電子廠區、實驗室'],
        ['提案重點', '安全規格與長期穩定性']
      ],
      swatches: [
        { name: 'Clinical Gray', tone: '#dadad8', light: true },
        { name: 'Graphite Mist', tone: '#b5b8ba', light: true },
        { name: 'Process Blue', tone: '#7793a2', light: false },
        { name: 'Control Charcoal', tone: '#465158', light: false }
      ],
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80'
      ]
    }
  };

  var page = document.querySelector('[data-product-page]');
  if (!page) {
    return;
  }

  var state = {
    productKey: 'senge',
    imageIndex: 0
  };

  var nameEl = document.querySelector('[data-product-name]');
  var enNameEl = document.querySelector('[data-product-en]');
  var codeEl = document.querySelector('[data-product-code]');
  var summaryEl = document.querySelector('[data-product-summary]');
  var imageEl = document.querySelector('[data-product-image]');
  var metaWrap = document.querySelector('[data-product-meta]');
  var featureWrap = document.querySelector('[data-product-features]');
  var specWrap = document.querySelector('[data-product-specs]');
  var swatchWrap = document.querySelector('[data-product-swatches]');
  var thumbWrap = document.querySelector('[data-product-thumbs]');
  var navButtons = document.querySelectorAll('[data-product-target]');

  function render() {
    var product = productData[state.productKey];
    if (!product) {
      return;
    }

    nameEl.textContent = product.name;
    enNameEl.textContent = product.enName;
    codeEl.textContent = product.code;
    summaryEl.textContent = product.summary;
    imageEl.src = product.images[state.imageIndex];
    imageEl.alt = product.name + ' 產品展示';

    metaWrap.innerHTML = product.meta.map(function (item) {
      return '<div class="meta-card"><strong>' + item.title + '</strong><span>' + item.value + '</span></div>';
    }).join('');

    featureWrap.innerHTML = product.features.map(function (item) {
      return '<li>' + item + '</li>';
    }).join('');

    specWrap.innerHTML = product.specs.map(function (row) {
      return '<tr><th>' + row[0] + '</th><td>' + row[1] + '</td></tr>';
    }).join('');

    swatchWrap.innerHTML = product.swatches.map(function (item) {
      var classes = 'swatch';
      if (item.light) {
        classes += ' light';
      }

      return '<div class="' + classes + '" style="background:' + item.tone + ';">' + item.name + '</div>';
    }).join('');

    thumbWrap.innerHTML = product.images.map(function (src, index) {
      var active = index === state.imageIndex ? ' is-active' : '';
      return '<button class="thumb-button' + active + '" type="button" data-thumb-index="' + index + '"><img src="' + src + '" alt="' + product.name + ' 圖片 ' + (index + 1) + '"></button>';
    }).join('');

    navButtons.forEach(function (button) {
      button.classList.toggle('is-active', button.getAttribute('data-product-target') === state.productKey);
    });

    thumbWrap.querySelectorAll('[data-thumb-index]').forEach(function (button) {
      button.addEventListener('click', function () {
        state.imageIndex = Number(button.getAttribute('data-thumb-index'));
        render();
      });
    });
  }

  navButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      state.productKey = button.getAttribute('data-product-target');
      state.imageIndex = 0;
      render();
    });
  });

  render();
})();