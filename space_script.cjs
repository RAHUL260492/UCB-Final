const fs = require('fs');
const path = require('path');

const srcDirs = ['./components', './pages'];

function recursiveReadDir(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(recursiveReadDir(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const allFiles = srcDirs.flatMap(d => recursiveReadDir(d));

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Regex replacement for py
  // User wanted py-4 md:py-6 over py-10,12,14,16,20,24,32
  content = content.replace(/\bpy-[1-9][0-9]*\b/g, (match) => {
    const val = parseInt(match.replace('py-', ''));
    if (val >= 8 && val <= 32) return 'py-4 md:py-6';
    return match;
  });

  // Regex replacement for p
  content = content.replace(/\bp-[1-9][0-9]*\b/g, (match) => {
    const val = parseInt(match.replace('p-', ''));
    if (val >= 8 && val <= 16) return 'p-4 md:p-6';
    return match;
  });

  // Regex replacement for px
  content = content.replace(/\bpx-[1-9][0-9]*\b/g, (match) => {
    const val = parseInt(match.replace('px-', ''));
    if (val >= 8 && val <= 16) return 'px-4 md:px-6';
    return match;
  });

  // Regex replacement for mb and mt
  content = content.replace(/\bmb-[1-9][0-9]*\b/g, (match) => {
    const val = parseInt(match.replace('mb-', ''));
    if (val >= 8 && val <= 32) return 'mb-4 md:mb-6';
    return match;
  });
  content = content.replace(/\bmt-[1-9][0-9]*\b/g, (match) => {
    const val = parseInt(match.replace('mt-', ''));
    if (val >= 8 && val <= 32) return 'mt-4 md:mt-6';
    return match;
  });

  // Regex replacement for gap
  content = content.replace(/\bgap-[1-9][0-9]*\b/g, (match) => {
    const val = parseInt(match.replace('gap-', ''));
    if (val >= 8 && val <= 16) return 'gap-4 md:gap-6';
    return match;
  });

  // line-height minimum 1.5x (leading-relaxed is 1.625)
  // add leading-relaxed to p classes if not present
  content = content.replace(/<(p|span|div)([^>]*)className="([^"]*)"/g, (match, tag, before, cls) => {
    // Only apply to p and divs that look like text containers
    if (tag === 'p' || cls.includes('text-gray') || cls.includes('text-sm') || cls.includes('text-base')) {
      if (!/\bleading-[a-z0-9-]+\b/.test(cls)) {
        return `<${tag}${before}className="${cls} leading-relaxed"`;
      }
    }
    return match;
  });

  // Minimum 44px touch targets
  // Any button or link
  content = content.replace(/<(button|input|select|textarea)([^>]*)className="([^"]*)"/g, (match, tag, before, cls) => {
    if (!/\bmin-h-[a-zA-Z0-9\[\]-]+\b/.test(cls) && !/\bw-[0-9]+ h-[0-9]+\b/.test(cls)) {
      if (!cls.includes('min-h-[44px]')) {
        return `<${tag}${before}className="${cls} min-h-[44px]"`;
      }
    }
    return match;
  });

  content = content.replace(/<(a|Link)([^>]*)className="([^"]*)"/g, (match, tag, before, cls) => {
    if ((cls.includes('bg-') || cls.includes('border') || cls.includes('button')) && cls.includes('px-')) {
      if (!/\bmin-h-[a-zA-Z0-9\[\]-]+\b/.test(cls) && !cls.includes('min-h-[44px]')) {
        return `<${tag}${before}className="${cls} min-h-[44px] inline-flex items-center justify-center"`; // Buttons that are relative inline should display flex to center
      }
    }
    return match;
  });

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Done mapping spaces');
