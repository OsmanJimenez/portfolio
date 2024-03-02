import { Component, OnInit } from '@angular/core';
import { ToolsService } from 'src/app/services/section/tools/tools.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit {
  tools = [];
  jsonLdScript: string;

  constructor(private toolsService: ToolsService) { }

  ngOnInit() {
    this.loadTools();
  }

  loadTools() {
    this.toolsService.get().subscribe(
      res => {
        if (res) {
          this.tools = res;
          this.generateJsonLdScript();
        }
      }
    );
  }

  generateJsonLdScript() {
    this.jsonLdScript = `{
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Herramientas que emplea Osman Jimenez",
      "itemListElement": [
        ${this.tools.map((tool, index) => {
      return `{
              "@type": "DefinedTerm",
              "name": "${tool.name}"
            }`;
    }).join(',')
      }
      ]
    }`;
  }
}
