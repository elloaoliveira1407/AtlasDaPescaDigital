export type DifficultyLevel = 1 | 2 | 3 | 4 | 5;

export type DepthZone = 'superficie' | 'meia-agua' | 'fundo';

export type Basin = 
  | 'Bacia Amazônica'
  | 'Bacia do Paraná-Paraguai'
  | 'Bacia do São Francisco'
  | 'Bacia do Tocantins-Araguaia'
  | 'Distribuição Nacional';

export type SizeCategory = 'Pequeno' | 'Médio' | 'Grande' | 'Gigante';

export interface MorphologyHotspot {
  id: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  title: string;
  description: string;
}

export interface Species {
  id: string;
  commonName: string;
  popularNicknames: string[];
  scientificName: string;
  family: string;
  order: string;
  difficulty: DifficultyLevel;
  difficultyLabel: string;
  difficultyRationale: string;
  fightBehavior: string;
  difficultyFactors: {
    increases: string[];
    decreases: string[];
  };
  sizeCategory: SizeCategory;
  typicalLength: string;
  recordLength: string;
  typicalWeight: string;
  recordWeight: string;
  dataReliability: 'Confirmado (ICMBio/IGFA)' | 'Estimativa de Campo & Amostragem';
  distribution: string[];
  primaryBasin: Basin;
  habitatDescription: string;
  habitatPredominant: string;
  feedingBehavior: string;
  trophicCategory: 'Carnívoro Estrito' | 'Piscívoro Voraz' | 'Onívoro' | 'Frugívoro / Herbívoro' | 'Detritívoro / Iliófago';
  habitatDepthRange: string; // onde vive e se abriga
  recommendedLureDepth: string; // onde a isca deve trabalhar!
  depthZone: DepthZone;
  structures: string[];
  tackleRecommended: {
    luresNatural: string[];
    luresArtificial: string[];
    lureTypesSummary: string;
    hook: {
      type: string;
      size: string;
      notes: string;
    };
    rod: {
      length: string;
      power: string;
      powerCode: 'UL' | 'L' | 'M' | 'MH' | 'H' | 'XH';
      action: 'Lenta' | 'Moderada' | 'Rápida' | 'Extra-Rápida';
      rationale: string;
    };
    line: {
      type: 'Multifilamento' | 'Fluorocarbono' | 'Monofilamento';
      strength: string;
      leader: string;
      notes: string;
    };
    retrievalTechnique: string;
  };
  conservation: {
    status: string;
    statusBadge: 'LC' | 'NT' | 'VU' | 'EN' | 'DD';
    defesoPeriod: string;
    minimumSize: string;
    catchAndReleaseRecommended: boolean;
    regulatoryNotes: string;
  };
  morphologyHotspots: MorphologyHotspot[];
  image: string;
  imagePhotographer: string;
  imageCreditUrl?: string;
  illustrationType: 'escamas' | 'couro' | 'dentes' | 'barbilhoes';
  primaryColor: string;
}

export interface GlossaryTerm {
  term: string;
  category: 'Ictiologia' | 'Equipamentos' | 'Técnicas' | 'Legislação';
  definition: string;
  practicalTip?: string;
}

export interface CompatibilityStep {
  step: number;
  label: string;
  category: string;
  description: string;
  influence: string;
}
