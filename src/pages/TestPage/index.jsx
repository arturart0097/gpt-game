import { Header } from "@/components/Header";
import { useState } from "react";
import "./style.css";

export default function TestPage() {
  const [selectedTab, setSelectedTab] = useState("gamegpt");

  const tabs = [
    {
      id: "gamegpt",
      name: "GameGpt",
      content: (
        <div className="tab-content" data-tab="gamegpt">
          <h2>GameGPT</h2>
          
          <div className="roadmap-section">
            <h3>Current Development Focus</h3>
            <div className="task-item">
              <strong>NFT Staker Whitelist</strong>
              <p>Manually whitelist NFT stakers who are running into access issues</p>
            </div>
          </div>

          <div className="roadmap-section">
            <h3>Coming Up Next</h3>
            <ul>
              <li>Add Grok-4 into API access</li>
              <li>Create one-click SDK install</li>
              <li>Create upload for Thumbnail</li>
              <li>Create 'submit game for arcade approval flow'</li>
              <li>Get first community game live in arcade</li>
            </ul>
          </div>

          <div className="roadmap-section">
            <h3>Accomplished Tasks</h3>
            <ul>
              <li>Game builder <span className="status-badge">done</span></li>
              <li>GameGPT v1 Design</li>
              <li>GameGPT v1 AI architecture</li>
              <li>GameGPT v1 Front end Implementation</li>
              <li>GameGPT v1 Backend buildout</li>
              <li>GameGPT Privy auth</li>
              <li>GameGPT backend sync with tournament data</li>
              <li>GameGPT connection with Arcade</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "ainfts",
      name: "AI NFTs",
      content: (
        <div className="tab-content">
          <h2>AI NFTs</h2>
          <p>Тут буде контент для AI NFTs. Унікальні цифрові активи, створені за допомогою штучного інтелекту.</p>
          <ul>
            <li>Генерація унікальних NFT</li>
            <li>AI-арт колекції</li>
            <li>Блокчейн інтеграція</li>
          </ul>
        </div>
      )
    },
    {
      id: "prismarcade",
      name: "Prism Arcade",
      content: (
        <div className="tab-content">
          <h2>Prism Arcade</h2>
          <p>Тут буде контент для Prism Arcade. Інноваційна аркадна платформа з сучасними іграми.</p>
          <ul>
            <li>Класичні аркадні ігри</li>
            <li>Сучасна графіка</li>
            <li>Мультиплеєр режим</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="test-page">
      <Header />
      <div className="button-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${selectedTab === tab.id ? 'active' : ''}`}
            onClick={() => setSelectedTab(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="content-container">
        {tabs.find(tab => tab.id === selectedTab)?.content}
      </div>
    </div>
  );
}
