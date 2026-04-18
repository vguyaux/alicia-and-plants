// Botanical + beach illustrations — richer, layered, hex-filled
// Outdoor coastal flora of Florida's barrier island

window.Illustrations = (function () {
  const INK = '#1f3a2e';
  const LEAF = '#3b7d5e';
  const LEAF_DARK = '#1f4a37';
  const LEAF_LIGHT = '#5a9d7b';
  const CLAY = '#c76a45';
  const CLAY_DARK = '#8f4928';
  const CREAM = '#fbf4e3';
  const SAND = '#e4cf9d';
  const BLOOM = '#d43d5b';
  const BLOOM_DARK = '#a52544';
  const SUN = '#e9b64a';
  const SKY = '#6a9fb0';

  const wrap = (vb, inner, extra = '') =>
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" stroke="${INK}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" ${extra}>${inner}</svg>`;

  return {
    monstera: (extra = '') => wrap('0 0 200 240', `
      <path d="M100 220 C 60 210 28 178 22 140 C 18 110 30 78 50 58 C 72 36 108 22 140 28 C 168 34 184 56 186 82 C 188 108 176 134 156 152 C 138 168 118 172 100 170 Z" fill="${LEAF}" />
      <path d="M100 220 C 80 215 60 200 46 180 C 76 196 106 198 130 188 C 118 178 108 172 100 170 Z" fill="${LEAF_DARK}" opacity="0.55" stroke="none" />
      <path d="M100 170 C 118 150 122 120 120 90 C 116 70 104 50 90 40" fill="${LEAF_LIGHT}" opacity="0.4" stroke="none" />
      <path d="M100 240 C 100 190 95 140 92 120" fill="none" stroke-width="2.4" />
      <path d="M100 170 C 112 162 118 148 118 134" fill="none" stroke-width="1.8" />
      <path d="M72 158 C 68 146 62 134 56 124 L 38 128" fill="none" stroke-width="1.8" />
      <path d="M58 104 C 64 94 72 86 82 80 L 76 60" fill="none" stroke-width="1.8" />
      <path d="M110 62 C 120 60 132 62 142 68 L 152 54" fill="none" stroke-width="1.8" />
      <path d="M142 108 C 152 104 162 98 170 90 L 178 100" fill="none" stroke-width="1.8" />
      <path d="M128 148 C 140 142 150 132 156 120 L 170 130" fill="none" stroke-width="1.8" />
    `, extra),

    // SAW PALMETTO — Serenoa repens — iconic Florida dune native, fan-shaped fronds
    sawPalmetto: (extra = '') => wrap('0 0 240 240', `
      <g transform="translate(120 210)">
        ${Array.from({length: 9}, (_, i) => {
          const angle = -90 + (i - 4) * 18;
          const rad = angle * Math.PI / 180;
          const len = 140 + (i === 4 ? 10 : -Math.abs(i-4)*4);
          const x2 = Math.cos(rad) * len;
          const y2 = Math.sin(rad) * len;
          const w = 14;
          const perpX = -Math.sin(rad) * w;
          const perpY = Math.cos(rad) * w;
          const fillC = (i + 4) % 2 === 0 ? LEAF : LEAF_DARK;
          return `<path d="M0 0 L ${x2+perpX} ${y2+perpY} L ${x2} ${y2+2} L ${x2-perpX} ${y2-perpY} Z" fill="${fillC}" />
                  <path d="M0 0 L ${x2} ${y2}" stroke-width="1.2" fill="none" opacity="0.6" />`;
        }).join('')}
        <circle cx="0" cy="0" r="8" fill="${CLAY_DARK}" />
      </g>
      <path d="M120 210 L 120 240" stroke-width="3" fill="none" />
    `, extra),

    // BEACH SUNFLOWER — Helianthus debilis — yellow daisy, ground cover on dunes
    beachSunflower: (extra = '') => wrap('0 0 200 200', `
      <circle cx="100" cy="100" r="20" fill="${CLAY_DARK}" />
      ${Array.from({length: 12}, (_, i) => {
        const a = (i * 30) * Math.PI / 180;
        const cx = 100 + Math.cos(a) * 42;
        const cy = 100 + Math.sin(a) * 42;
        return `<ellipse cx="${cx}" cy="${cy}" rx="22" ry="11" fill="${SUN}" transform="rotate(${i*30} ${cx} ${cy})" />`;
      }).join('')}
      <circle cx="100" cy="100" r="20" fill="${CLAY_DARK}" stroke="${INK}" />
      <circle cx="96" cy="96" r="2" fill="${INK}" stroke="none" />
      <circle cx="104" cy="102" r="2" fill="${INK}" stroke="none" />
      <circle cx="100" cy="108" r="2" fill="${INK}" stroke="none" />
      <path d="M100 160 L 100 190" stroke-width="2.4" fill="none" />
      <path d="M100 175 C 88 172 80 180 82 188" fill="${LEAF}" />
      <path d="M100 180 C 112 178 120 186 118 192" fill="${LEAF}" />
    `, extra),

    // MUHLY GRASS — Muhlenbergia capillaris — native, famous pink plumes in fall
    muhlyGrass: (extra = '') => wrap('0 0 200 240', `
      <!-- cloud of pink inflorescence -->
      <ellipse cx="100" cy="90" rx="90" ry="55" fill="${BLOOM}" opacity="0.35" stroke="none" />
      <ellipse cx="100" cy="90" rx="72" ry="42" fill="${BLOOM}" opacity="0.45" stroke="none" />
      ${Array.from({length: 26}, (_, i) => {
        const x = 20 + i * 7 + (i%2)*3;
        const topY = 30 + Math.sin(i*1.3)*20;
        const botY = 180;
        return `<path d="M${x} ${topY} Q ${x + (i%3-1)*8} ${(topY+botY)/2} ${100 + (i%5-2)*6} ${botY}" stroke="${BLOOM_DARK}" stroke-width="1.2" fill="none" opacity="0.7" />`;
      }).join('')}
      <!-- grass blades -->
      ${Array.from({length: 8}, (_, i) => {
        const x1 = 60 + i * 10;
        return `<path d="M${x1} 220 Q ${x1-4} 190 ${x1-8} 160" stroke-width="2" fill="none" />`;
      }).join('')}
      <path d="M60 230 L 140 230" stroke-width="2.4" fill="none" />
    `, extra),

    // FIREBUSH — Hamelia patens — red-orange tubular blooms, native butterfly plant
    firebush: (extra = '') => wrap('0 0 200 200', `
      <!-- stem -->
      <path d="M100 190 L 100 110" stroke-width="2.6" fill="none" />
      <!-- leaves -->
      <path d="M100 150 C 70 148 50 132 42 112 C 66 118 88 130 100 150 Z" fill="${LEAF}" />
      <path d="M100 150 C 130 148 150 132 158 112 C 134 118 112 130 100 150 Z" fill="${LEAF}" />
      <path d="M100 130 C 78 126 62 112 56 94 C 76 100 92 112 100 130 Z" fill="${LEAF_DARK}" />
      <path d="M100 130 C 122 126 138 112 144 94 C 124 100 108 112 100 130 Z" fill="${LEAF_DARK}" />
      <!-- tubular red-orange flowers clustered -->
      <g>
        <path d="M100 110 C 88 90 84 70 92 58 L 98 66 L 100 56 L 104 68 L 108 60 L 106 80 Z" fill="${CLAY}" />
        <path d="M100 110 C 112 96 122 80 124 64 L 128 74 L 132 66 L 132 82 L 138 78 L 130 96 Z" fill="${CLAY}" />
        <path d="M100 110 C 84 100 70 84 66 70 L 68 82 L 60 80 L 66 92 L 58 94 L 74 104 Z" fill="${BLOOM}" />
        <path d="M100 110 C 108 86 114 66 130 56 L 128 68 L 138 66 L 132 78 L 142 80 L 128 94 Z" fill="${CLAY}" />
        <circle cx="95" cy="55" r="3" fill="${SUN}" stroke="none" />
        <circle cx="132" cy="62" r="3" fill="${SUN}" stroke="none" />
        <circle cx="62" cy="74" r="3" fill="${SUN}" stroke="none" />
        <circle cx="135" cy="58" r="3" fill="${SUN}" stroke="none" />
      </g>
    `, extra),

    // PLUMERIA / FRANGIPANI — white & yellow, common Daytona ornamental
    plumeria: (extra = '') => wrap('0 0 200 200', `
      <!-- 5 pinwheel petals -->
      ${Array.from({length: 5}, (_, i) => {
        const a = (i * 72 - 90) * Math.PI / 180;
        const tx = 100 + Math.cos(a) * 28;
        const ty = 100 + Math.sin(a) * 28;
        const rot = i * 72;
        return `<path d="M100 100 Q ${tx-Math.sin(a)*28} ${ty+Math.cos(a)*28} ${tx+Math.cos(a)*40} ${ty+Math.sin(a)*40} Q ${tx+Math.sin(a)*22} ${ty-Math.cos(a)*22} 100 100 Z" fill="${CREAM}" transform="rotate(${rot} 100 100)" />`;
      }).join('')}
      <!-- yellow center glow -->
      <circle cx="100" cy="100" r="22" fill="${SUN}" opacity="0.7" stroke="none" />
      <circle cx="100" cy="100" r="12" fill="${SUN}" />
      <!-- recenter petals with clean versions -->
      <path d="M100 100 C 100 80 108 62 128 58 C 136 70 130 88 114 100 Z" fill="${CREAM}" />
      <path d="M100 100 C 118 96 140 102 148 120 C 138 132 118 130 106 114 Z" fill="${CREAM}" />
      <path d="M100 100 C 106 118 102 140 82 148 C 72 138 78 118 94 108 Z" fill="${CREAM}" />
      <path d="M100 100 C 82 104 60 98 52 80 C 62 68 82 70 94 86 Z" fill="${CREAM}" />
      <path d="M100 100 C 94 82 98 60 118 52 C 128 62 122 82 106 94 Z" fill="${CREAM}" />
      <circle cx="100" cy="100" r="10" fill="${SUN}" />
    `, extra),

    palm: (extra = '') => wrap('0 0 240 240', `
      <path d="M124 90 C 96 78 68 74 44 80 C 70 88 92 92 110 98 C 90 100 72 110 62 126 C 84 118 104 112 122 112 Z" fill="${LEAF}" />
      <path d="M128 110 C 100 98 70 96 46 104 C 72 112 96 116 116 120 C 96 124 78 134 68 152 C 90 144 108 136 126 134 Z" fill="${LEAF}" />
      <path d="M132 135 C 106 124 78 124 56 134 C 82 140 104 144 124 146 C 104 152 88 162 78 180 C 100 172 116 164 132 160 Z" fill="${LEAF_DARK}" />
      <path d="M136 160 C 114 152 90 154 72 164 C 96 170 114 174 130 176 C 114 184 102 196 92 204 C 112 196 124 190 136 186 Z" fill="${LEAF_DARK}" />
      <path d="M124 90 C 152 78 180 74 204 80 C 178 88 156 92 138 98 C 158 100 176 110 186 126 C 164 118 144 112 126 112 Z" fill="${LEAF}" />
      <path d="M128 110 C 156 98 186 96 210 104 C 184 112 160 116 140 120 C 160 124 178 134 188 152 C 166 144 148 136 130 134 Z" fill="${LEAF}" />
      <path d="M132 135 C 158 124 186 124 208 134 C 182 140 160 144 140 146 C 160 152 176 162 186 180 C 164 172 148 164 132 160 Z" fill="${LEAF_DARK}" />
      <path d="M136 160 C 158 152 182 154 200 164 C 176 170 158 174 142 176 C 158 184 170 196 180 204 C 160 196 148 190 136 186 Z" fill="${LEAF_DARK}" />
      <path d="M120 240 C 120 180 122 130 124 90" stroke-width="2.8" fill="none" />
    `, extra),

    hibiscus: (extra = '') => wrap('0 0 220 220', `
      <path d="M110 110 C 92 70 88 42 104 26 C 116 14 134 20 140 40 C 146 62 136 90 126 110 Z" fill="${BLOOM}" />
      <path d="M110 110 C 150 102 180 108 190 130 C 196 146 186 160 166 160 C 146 160 124 142 114 120 Z" fill="${BLOOM}" />
      <path d="M110 110 C 136 148 144 180 132 198 C 118 212 100 208 92 190 C 84 170 92 142 106 118 Z" fill="${BLOOM}" />
      <path d="M110 110 C 72 128 46 136 28 126 C 14 116 16 100 34 92 C 54 84 82 92 106 106 Z" fill="${BLOOM}" />
      <path d="M110 110 C 78 82 60 58 66 38 C 72 22 90 22 102 38 C 114 54 116 84 112 108 Z" fill="${BLOOM}" />
      <path d="M110 110 C 92 94 84 76 84 60 C 98 66 106 82 110 100 Z" fill="${BLOOM_DARK}" opacity="0.75" stroke="none" />
      <path d="M110 110 C 130 104 152 110 168 124 C 150 128 128 122 114 116 Z" fill="${BLOOM_DARK}" opacity="0.75" stroke="none" />
      <circle cx="110" cy="110" r="9" fill="${SUN}" />
      <path d="M110 102 L 110 76" stroke-width="1.8" />
      <path d="M104 102 L 98 78" stroke-width="1.8" />
      <path d="M116 102 L 122 78" stroke-width="1.8" />
      <circle cx="110" cy="74" r="3.5" fill="${SUN}" />
      <circle cx="98" cy="76" r="3.5" fill="${SUN}" />
      <circle cx="122" cy="76" r="3.5" fill="${SUN}" />
    `, extra),

    sun: (extra = '') => wrap('0 0 200 200', `
      <circle cx="100" cy="100" r="36" fill="${SUN}" />
      <path d="M100 18 L 100 50" stroke-width="3" />
      <path d="M100 150 L 100 182" stroke-width="3" />
      <path d="M18 100 L 50 100" stroke-width="3" />
      <path d="M150 100 L 182 100" stroke-width="3" />
      <path d="M42 42 L 64 64" stroke-width="3" />
      <path d="M136 136 L 158 158" stroke-width="3" />
      <path d="M158 42 L 136 64" stroke-width="3" />
      <path d="M64 136 L 42 158" stroke-width="3" />
    `, extra),

    wateringCan: (extra = '') => wrap('0 0 240 200', `
      <path d="M60 70 L 60 160 C 60 172 70 180 82 180 L 140 180 C 152 180 162 172 162 160 L 162 70 Z" fill="${CLAY}" />
      <path d="M60 70 L 60 160 C 60 172 70 180 82 180 L 94 180 L 94 70 Z" fill="${CLAY_DARK}" opacity="0.45" stroke="none" />
      <path d="M50 70 L 172 70" stroke-width="2.6" />
      <path d="M70 70 C 70 56 82 48 96 48 L 126 48 C 140 48 152 56 152 70 Z" fill="${CLAY}" />
      <path d="M162 90 L 200 70 L 220 76 L 220 96 L 200 102 L 162 120 Z" fill="${CLAY}" />
      <path d="M200 70 L 200 102" />
      <path d="M60 110 C 48 108 36 118 36 132 C 36 146 48 156 60 154" fill="none" />
      <circle cx="212" cy="80" r="2" fill="${INK}" stroke="none" />
      <circle cx="212" cy="86" r="2" fill="${INK}" stroke="none" />
      <circle cx="212" cy="92" r="2" fill="${INK}" stroke="none" />
    `, extra),

    seagrape: (extra = '') => wrap('0 0 200 200', `
      <path d="M100 130 C 60 130 30 100 28 70 C 26 44 44 24 72 22 C 100 20 128 34 150 58 C 168 78 176 102 172 124 C 168 144 150 152 128 144 C 112 138 102 130 100 130 Z" fill="${LEAF}" />
      <path d="M100 130 C 60 130 30 100 28 70 C 48 84 72 96 96 104 C 90 116 94 126 100 130 Z" fill="${LEAF_DARK}" opacity="0.55" stroke="none" />
      <path d="M100 180 L 100 130" stroke-width="2.6" fill="none" />
      <path d="M100 130 C 104 110 110 90 120 72" fill="none" stroke-width="1.8" />
      <path d="M80 120 C 74 108 68 94 64 78" fill="none" stroke-width="1.8" />
      <path d="M60 100 L 44 94" fill="none" stroke-width="1.8" />
      <path d="M140 110 L 156 100" fill="none" stroke-width="1.8" />
      <path d="M132 88 L 148 74" fill="none" stroke-width="1.8" />
      <circle cx="118" cy="60" r="6" fill="${CLAY}" />
      <circle cx="132" cy="52" r="6" fill="${CLAY}" />
      <circle cx="126" cy="68" r="6" fill="${CLAY}" />
    `, extra),

    wave: (extra = '') => wrap('0 0 400 80', `
      <path d="M0 40 C 40 20 80 60 120 40 C 160 20 200 60 240 40 C 280 20 320 60 360 40 C 380 30 390 36 400 40" stroke-width="2.4" fill="none" />
      <path d="M0 60 C 40 46 80 70 120 60 C 160 50 200 70 240 60 C 280 50 320 70 360 60 C 380 54 390 58 400 60" stroke-width="2" opacity="0.55" fill="none" />
    `, extra),

    pot: (extra = '') => wrap('0 0 160 200', `
      <path d="M80 120 C 80 100 72 80 58 68 C 52 62 44 60 38 62 C 36 74 44 90 58 100 C 68 108 76 114 80 120 Z" fill="${LEAF}" />
      <path d="M80 120 C 80 94 88 68 104 52 C 108 44 116 38 124 38 C 126 52 118 74 104 90 C 94 102 84 112 80 120 Z" fill="${LEAF}" />
      <path d="M80 120 C 80 108 74 96 64 88 C 58 84 52 82 48 84 C 48 96 56 108 68 116 C 74 120 78 120 80 120 Z" fill="${LEAF_DARK}" opacity="0.75" />
      <path d="M40 120 L 50 180 C 50 186 56 190 62 190 L 98 190 C 104 190 110 186 110 180 L 120 120 Z" fill="${CLAY}" />
      <path d="M40 120 L 50 180 C 50 186 56 190 62 190 L 72 190 L 62 120 Z" fill="${CLAY_DARK}" opacity="0.45" stroke="none" />
      <path d="M38 120 L 122 120" stroke-width="2.6" />
    `, extra),

    starfish: (extra = '') => wrap('0 0 120 120', `
      <path d="M60 10 L 74 46 L 112 46 L 82 68 L 94 104 L 60 82 L 26 104 L 38 68 L 8 46 L 46 46 Z" fill="${CLAY}" />
      <circle cx="60" cy="50" r="3" fill="${CREAM}" stroke="none" />
      <circle cx="50" cy="66" r="3" fill="${CREAM}" stroke="none" />
      <circle cx="70" cy="66" r="3" fill="${CREAM}" stroke="none" />
      <circle cx="60" cy="78" r="3" fill="${CREAM}" stroke="none" />
    `, extra),

    shell: (extra = '') => wrap('0 0 160 140', `
      <path d="M80 130 C 30 130 10 90 20 60 C 28 38 48 20 80 20 C 112 20 132 38 140 60 C 150 90 130 130 80 130 Z" fill="${SAND}" />
      <path d="M80 20 L 80 130" stroke-width="2" />
      <path d="M60 24 C 52 60 52 100 64 128" fill="none" />
      <path d="M100 24 C 108 60 108 100 96 128" fill="none" />
      <path d="M40 36 C 32 70 38 108 54 128" fill="none" />
      <path d="M120 36 C 128 70 122 108 106 128" fill="none" />
    `, extra),

    fern: (extra = '') => wrap('0 0 120 240', `
      <path d="M60 230 C 60 180 56 120 50 60 C 46 30 50 10 60 8" stroke-width="2.6" fill="none" />
      <path d="M58 200 C 46 196 34 186 28 174 C 40 178 52 186 58 200 Z" fill="${LEAF}" />
      <path d="M58 200 C 70 196 82 186 88 174 C 76 178 64 186 58 200 Z" fill="${LEAF}" />
      <path d="M56 170 C 44 164 32 152 26 138 C 40 144 52 154 56 170 Z" fill="${LEAF}" />
      <path d="M56 170 C 68 164 80 152 86 138 C 72 144 60 154 56 170 Z" fill="${LEAF}" />
      <path d="M54 138 C 42 130 30 118 24 102 C 38 110 50 122 54 138 Z" fill="${LEAF}" />
      <path d="M54 138 C 66 130 78 118 84 102 C 70 110 58 122 54 138 Z" fill="${LEAF}" />
      <path d="M52 106 C 42 96 32 84 28 70 C 40 78 50 90 52 106 Z" fill="${LEAF_DARK}" />
      <path d="M52 106 C 62 96 72 84 76 70 C 64 78 54 90 52 106 Z" fill="${LEAF_DARK}" />
      <path d="M52 78 C 44 68 36 58 32 46 C 42 54 50 64 52 78 Z" fill="${LEAF_DARK}" />
      <path d="M52 78 C 60 68 68 58 72 46 C 62 54 54 64 52 78 Z" fill="${LEAF_DARK}" />
      <path d="M54 52 C 48 44 42 38 36 32 C 44 38 52 44 54 52 Z" fill="${LEAF_DARK}" />
      <path d="M54 52 C 60 44 66 38 72 32 C 64 38 56 44 54 52 Z" fill="${LEAF_DARK}" />
    `, extra),

    sprout: (extra = '') => wrap('0 0 100 100', `
      <path d="M50 90 L 50 50" stroke-width="2.6" fill="none" />
      <path d="M50 60 C 36 60 24 50 24 36 C 36 36 48 46 50 60 Z" fill="${LEAF}" />
      <path d="M50 56 C 64 56 76 46 76 32 C 64 32 52 42 50 56 Z" fill="${LEAF}" />
    `, extra),

    umbrella: (extra = '') => wrap('0 0 200 200', `
      <path d="M100 40 C 50 40 20 72 16 100 L 184 100 C 180 72 150 40 100 40 Z" fill="${CLAY}" />
      <path d="M100 40 C 80 44 62 60 48 80 C 60 84 74 90 86 94 C 90 78 94 60 100 40 Z" fill="${CREAM}" />
      <path d="M100 40 C 120 44 138 60 152 80 C 140 84 126 90 114 94 C 110 78 106 60 100 40 Z" fill="${CREAM}" />
      <path d="M16 100 L 184 100" stroke-width="2.6" />
      <path d="M100 40 L 100 170" stroke-width="2.4" />
      <path d="M100 170 C 100 180 108 186 118 184" fill="none" />
    `, extra),

    bougainvillea: (extra = '') => wrap('0 0 200 200', `
      <path d="M100 100 L 80 70" stroke-width="2.4" fill="none" />
      <path d="M100 100 L 130 80" stroke-width="2.4" fill="none" />
      <path d="M100 100 L 120 130" stroke-width="2.4" fill="none" />
      <path d="M100 100 L 70 120" stroke-width="2.4" fill="none" />
      <path d="M80 70 C 60 60 50 40 60 28 C 72 38 80 52 80 70 Z" fill="${BLOOM}" />
      <path d="M80 70 C 98 60 110 42 108 28 C 94 36 84 52 80 70 Z" fill="${BLOOM}" />
      <path d="M80 70 C 60 78 40 72 30 58 C 46 54 66 60 80 70 Z" fill="${BLOOM_DARK}" />
      <path d="M130 80 C 148 68 160 48 154 34 C 140 44 132 60 130 80 Z" fill="${BLOOM}" />
      <path d="M130 80 C 148 94 168 94 178 82 C 164 74 146 76 130 80 Z" fill="${BLOOM_DARK}" />
      <path d="M120 130 C 138 146 160 150 172 140 C 156 128 136 126 120 130 Z" fill="${BLOOM}" />
      <path d="M120 130 C 108 152 110 176 124 186 C 128 168 126 146 120 130 Z" fill="${BLOOM_DARK}" />
      <path d="M70 120 C 52 132 42 154 48 170 C 64 158 72 140 70 120 Z" fill="${BLOOM}" />
      <path d="M70 120 C 48 118 30 130 26 148 C 44 144 60 134 70 120 Z" fill="${BLOOM_DARK}" />
      <circle cx="100" cy="100" r="6" fill="${SUN}" />
      <circle cx="80" cy="70" r="3" fill="${SUN}" />
      <circle cx="130" cy="80" r="3" fill="${SUN}" />
      <circle cx="120" cy="130" r="3" fill="${SUN}" />
      <circle cx="70" cy="120" r="3" fill="${SUN}" />
    `, extra),

    birdOfParadise: (extra = '') => wrap('0 0 200 240', `
      <path d="M100 230 L 100 140" stroke-width="3" fill="none" />
      <path d="M100 140 C 80 138 60 130 46 116 C 40 110 38 104 42 102 C 56 104 76 112 96 124 C 102 128 104 134 100 140 Z" fill="${LEAF}" />
      <path d="M46 116 C 38 90 50 64 72 56 C 74 78 66 102 56 116 Z" fill="${SUN}" />
      <path d="M46 116 C 30 100 28 72 44 54 C 54 72 54 98 50 118 Z" fill="${CLAY}" />
      <path d="M46 116 C 60 92 88 76 108 80 C 96 98 76 114 56 120 Z" fill="${SUN}" />
      <path d="M60 126 C 76 130 96 130 110 120 C 100 140 76 146 58 138 Z" fill="${SKY}" />
      <path d="M100 140 C 130 130 160 110 170 80 C 172 70 168 64 162 66 C 144 74 120 104 104 134 Z" fill="${LEAF}" />
      <path d="M100 140 C 120 136 140 124 154 106 C 140 114 120 126 104 138 Z" fill="${LEAF_DARK}" opacity="0.55" stroke="none" />
    `, extra),
  };
})();
